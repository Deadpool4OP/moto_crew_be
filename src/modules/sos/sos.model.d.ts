import mongoose from 'mongoose';
export declare const SOS: mongoose.Model<{
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
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
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "tea_break" | "water_break" | "bike_issue" | "emergency";
    userId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    status: "active" | "resolved";
    message?: string | null;
    location?: {
        lat: number;
        lng: number;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=sos.model.d.ts.map