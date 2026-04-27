import { z } from 'zod';
export const createRoom = z.object({
    body: z.object({
        name: z.string(),
        destination: z.object({
            lat: z.number(),
            lng: z.number(),
            name: z.string().optional(),
        }).optional(),
    }),
});
export const joinRoom = z.object({
    body: z.object({
        code: z.string(),
    }),
});
export const leaveRoom = z.object({
    params: z.object({
        roomId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
});
export const getRoom = z.object({
    params: z.object({
        roomId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    }),
});
//# sourceMappingURL=room.validation.js.map