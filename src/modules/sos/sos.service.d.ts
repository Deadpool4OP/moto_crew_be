export declare const sosService: {
    createSos: (userId: string, sosData: any) => Promise<import("mongoose").Document<unknown, {}, {
        type: "tea_break" | "water_break" | "bike_issue" | "emergency";
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        status: "active" | "resolved";
        message?: string | null;
        location?: {
            lat: number;
            lng: number;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        type: "tea_break" | "water_break" | "bike_issue" | "emergency";
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        status: "active" | "resolved";
        message?: string | null;
        location?: {
            lat: number;
            lng: number;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getSosByRoom: (roomId: string) => Promise<(import("mongoose").Document<unknown, {}, {
        type: "tea_break" | "water_break" | "bike_issue" | "emergency";
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        status: "active" | "resolved";
        message?: string | null;
        location?: {
            lat: number;
            lng: number;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        type: "tea_break" | "water_break" | "bike_issue" | "emergency";
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        status: "active" | "resolved";
        message?: string | null;
        location?: {
            lat: number;
            lng: number;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
};
//# sourceMappingURL=sos.service.d.ts.map