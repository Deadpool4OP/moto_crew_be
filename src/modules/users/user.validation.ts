import { z } from 'zod';

export const getUser = z.object({
  params: z.object({
    userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid user ID'),
  }),
});

export const updateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    mobile: z.string().min(10).optional(),
    avatar: z.string().optional(),
    vehicleType: z.enum(['bike', 'car', 'scooter', 'other']).optional(),
  }).refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  }),
});

export const queryUsers = z.object({
  query: z.object({
    name: z.string().optional(),
    role: z.string().optional(),
    sortBy: z.string().optional(),
    limit: z.string().optional(),
    page: z.string().optional(),
  }),
});
