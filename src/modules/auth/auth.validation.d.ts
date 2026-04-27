import { z } from 'zod';
export declare const register: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodOptional<z.ZodString>;
        mobile: z.ZodString;
        password: z.ZodString;
        name: z.ZodString;
        avatar: z.ZodOptional<z.ZodString>;
        vehicleType: z.ZodEnum<{
            bike: "bike";
            car: "car";
            scooter: "scooter";
            other: "other";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const login: z.ZodObject<{
    body: z.ZodObject<{
        mobile: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const verifyOtp: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        otp: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map