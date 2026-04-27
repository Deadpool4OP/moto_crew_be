import mongoose from 'mongoose';
export declare const Location: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    timestamp: NativeDate;
    location?: {
        type: "Point";
        coordinates: number[];
        heading?: number | null;
        speed?: number | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=location.model.d.ts.map