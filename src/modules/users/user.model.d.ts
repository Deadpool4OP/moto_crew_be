import { Document, Model } from 'mongoose';
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
export declare const User: IUserModel;
//# sourceMappingURL=user.model.d.ts.map