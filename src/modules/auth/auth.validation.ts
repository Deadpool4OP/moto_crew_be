import { z } from 'zod';

export const register = z.object({
  body: z.object({
    email: z.string().email().optional(),
    mobile: z.string().min(10),
    password: z.string().min(8),
    name: z.string(),
    avatar: z.string().optional(),
    vehicleType: z.enum(['bike', 'car', 'scooter', 'other']),
  }),
});

export const login = z.object({
  body: z.object({
    mobile: z.string(),
    password: z.string(),
  }),
});

export const verifyOtp = z.object({
  body: z.object({
    email: z.string().email(),
    otp: z.string().length(6),
  }),
});
