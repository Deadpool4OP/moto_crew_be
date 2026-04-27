import { z } from 'zod';
export declare const createRoom: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        destination: z.ZodOptional<z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const joinRoom: z.ZodObject<{
    body: z.ZodObject<{
        code: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const leaveRoom: z.ZodObject<{
    params: z.ZodObject<{
        roomId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const getRoom: z.ZodObject<{
    params: z.ZodObject<{
        roomId: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=room.validation.d.ts.map