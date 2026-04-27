import { z } from 'zod';
export const updateLocation = z.object({
    body: z.object({
        roomId: z.string().regex(/^[0-9a-fA-F]{24}$/),
        lat: z.number(),
        lng: z.number(),
        heading: z.number().optional(),
        speed: z.number().optional(),
    }),
});
export const getLocationByRoom = z.object({
    params: z.object({
        roomId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
});
//# sourceMappingURL=location.validation.js.map