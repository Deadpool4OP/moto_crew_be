import { z } from 'zod';
export declare const getUser: z.ZodObject<{
    params: z.ZodObject<{
        userId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updateUser: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        mobile: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
        vehicleType: z.ZodOptional<z.ZodEnum<{
            bike: "bike";
            car: "car";
            scooter: "scooter";
            other: "other";
        }>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const queryUsers: z.ZodObject<{
    query: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
        sortBy: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        page: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=user.validation.d.ts.map