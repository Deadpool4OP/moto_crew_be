export declare const authService: {
    createUser: (userBody: any) => Promise<import("mongoose").Document<unknown, {}, import("../users/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../users/user.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    loginUserWithMobileAndPassword: (mobile: string, password: string) => Promise<import("mongoose").Document<unknown, {}, import("../users/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../users/user.model.js").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    generateAuthTokens: (user: any) => Promise<{
        access: {
            token: string;
            expires: string;
        };
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map