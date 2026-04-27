export declare const roomService: {
    createRoom: (roomBody: any, hostId: string) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    joinRoom: (code: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    leaveRoom: (roomId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    getRoomById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    getMyRooms: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    getRideHistory: typeof getRideHistory;
    closeRoom: (roomId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        name: string;
        host: import("mongoose").Types.ObjectId;
        code: string;
        riders: import("mongoose").Types.ObjectId[];
        maxRiders: number;
        isActive: boolean;
        distance: number;
        duration: number;
        destination?: {
            name?: string | null;
            lat?: number | null;
            lng?: number | null;
        } | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
};
/**
 * Get ride history for a user
 * @param {ObjectId} userId
 * @returns {Promise<Room[]>}
 */
declare function getRideHistory(userId: string): Promise<(import("mongoose").Document<unknown, {}, {
    name: string;
    host: import("mongoose").Types.ObjectId;
    code: string;
    riders: import("mongoose").Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    host: import("mongoose").Types.ObjectId;
    code: string;
    riders: import("mongoose").Types.ObjectId[];
    maxRiders: number;
    isActive: boolean;
    distance: number;
    duration: number;
    destination?: {
        name?: string | null;
        lat?: number | null;
        lng?: number | null;
    } | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export {};
//# sourceMappingURL=room.service.d.ts.map