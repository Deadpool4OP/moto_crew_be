import { z } from 'zod';
export declare const updateLocation: z.ZodObject<{
    body: z.ZodObject<{
        roomId: z.ZodString;
        lat: z.ZodNumber;
        lng: z.ZodNumber;
        heading: z.ZodOptional<z.ZodNumber>;
        speed: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const getLocationByRoom: z.ZodObject<{
    params: z.ZodObject<{
        roomId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=location.validation.d.ts.map