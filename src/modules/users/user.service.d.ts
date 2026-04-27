export declare const userService: {
    getUserById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getUserByEmail: (email: string) => Promise<(import("mongoose").Document<unknown, {}, import("./user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateUserById: (userId: string, updateBody: any) => Promise<import("mongoose").Document<unknown, {}, import("./user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    queryUsers: (filter: any, options: any) => Promise<{
        results: (import("mongoose").Document<unknown, {}, import("./user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.model.js").IUser & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[];
        page: any;
        limit: any;
        totalPages: number;
        totalResults: number;
    }>;
    getUserStats: (userId: string) => Promise<{
        totalDistance: number;
        totalRides: number;
        crewSize: number;
        friends: number;
        rank: number;
        points: number;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map