export declare const locationService: {
    updateLocation: (userId: string, roomId: string, locationData: any) => Promise<import("mongoose").Document<unknown, {}, {
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        timestamp: NativeDate;
        location?: {
            type: "Point";
            coordinates: number[];
            heading?: number | null;
            speed?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        timestamp: NativeDate;
        location?: {
            type: "Point";
            coordinates: number[];
            heading?: number | null;
            speed?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getLocationByRoom: (roomId: string) => Promise<(import("mongoose").Document<unknown, {}, {
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        timestamp: NativeDate;
        location?: {
            type: "Point";
            coordinates: number[];
            heading?: number | null;
            speed?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        userId: import("mongoose").Types.ObjectId;
        roomId: import("mongoose").Types.ObjectId;
        timestamp: NativeDate;
        location?: {
            type: "Point";
            coordinates: number[];
            heading?: number | null;
            speed?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
};
//# sourceMappingURL=location.service.d.ts.map