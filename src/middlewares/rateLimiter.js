import rateLimit from 'express-rate-limit';
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 20 requests per windowMs
    skipSuccessfulRequests: true,
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
});
export const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per minute
    message: 'Too many requests from this IP, please try again later',
});
//# sourceMappingURL=rateLimiter.js.map