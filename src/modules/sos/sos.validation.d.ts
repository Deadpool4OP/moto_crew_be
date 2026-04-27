import { z } from 'zod';
export declare const createSos: z.ZodObject<{
    body: z.ZodObject<{
        roomId: z.ZodString;
        type: z.ZodEnum<{
            tea_break: "tea_break";
            water_break: "water_break";
            bike_issue: "bike_issue";
            emergency: "emergency";
        }>;
        location: z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
        }, z.core.$strip>;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const getSosByRoom: z.ZodObject<{
    params: z.ZodObject<{
        roomId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=sos.validation.d.ts.map