import { z } from 'zod';

export const createCrew = z.object({
  body: z.object({
    name: z.string().min(3),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const getCrew = z.object({
  params: z.object({
    crewId: z.string().regex(/^[0-9a-fA-F]{24}$/),
  }),
});
