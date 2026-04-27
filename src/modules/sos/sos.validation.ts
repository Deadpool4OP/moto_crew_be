import { z } from 'zod';

export const createSos = z.object({
  body: z.object({
    roomId: z.string().regex(/^[0-9a-fA-F]{24}$/),
    type: z.enum(['tea_break', 'water_break', 'bike_issue', 'emergency']),
    location: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    message: z.string().optional(),
  }),
});

export const getSosByRoom = z.object({
  params: z.object({
    roomId: z.string().regex(/^[0-9a-fA-F]{24}$/),
  }),
});
