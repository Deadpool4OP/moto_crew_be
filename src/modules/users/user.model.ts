import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { toJSON } from '../../utils/toJSON.js';

export interface IUser extends Document {
  name: string;
  email?: string;
  mobile: string;
  password: string;
  avatar: string;
  vehicleType: string;
  role: string;
  totalDistance: number;
  totalPoints: number;
  isPasswordMatch(password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUser> {
  isEmailTaken(email: string, excludeUserId?: string): Promise<boolean>;
  isMobileTaken(mobile: string, excludeUserId?: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser, IUserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      sparse: true, // Allow multiple users with no email
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      private: true, // used by toJSON plugin if added
    },
    avatar: {
      type: String,
      default: '',
    },
    vehicleType: {
      type: String,
      enum: ['bike', 'car', 'scooter', 'other'],
      default: 'bike',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    totalDistance: {
      type: Number,
      default: 0,
    },
    totalPoints: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Check if email is taken
userSchema.statics.isEmailTaken = async function (email: string, excludeUserId?: string) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } } as any);
  return !!user;
};

// Check if mobile is taken
userSchema.statics.isMobileTaken = async function (mobile: string, excludeUserId?: string) {
  const user = await this.findOne({ mobile, _id: { $ne: excludeUserId } } as any);
  return !!user;
};

// Check if password matches
userSchema.methods.isPasswordMatch = async function (password: string) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function () {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password as string, 8);
  }
});

userSchema.plugin(toJSON);

export const User = mongoose.model<IUser, IUserModel>('User', userSchema);

// Auto-drop stale email index to support sparse unique index
mongoose.connection.on('open', async () => {
  try {
    const indexes = (await User.collection.getIndexes()) as any;
    if (indexes.email_1 && !indexes.email_1.sparse) {
      console.log('[Database] Dropping stale email index to apply sparse setting...');
      await User.collection.dropIndex('email_1');
      console.log('[Database] Stale email index dropped successfully');
    }
  } catch (err) {
    // Index might not exist or already be correct
    console.log('[Database] Email index check complete');
  }
});
