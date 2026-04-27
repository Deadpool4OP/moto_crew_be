import mongoose from 'mongoose';
export declare const Room: mongoose.Model<{
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
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
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    host: mongoose.Types.ObjectId;
    code: string;
    riders: mongoose.Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=room.model.d.ts.map