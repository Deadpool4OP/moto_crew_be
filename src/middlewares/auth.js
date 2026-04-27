import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import { config } from '../config/env.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../modules/users/user.model.js';
export const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
        }
        const token = authHeader.split(' ')[1];
        const payload = jwt.verify(token, config.jwt.secret);
        const user = await User.findById(payload.sub);
        if (!user) {
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
        }
        req.user = user;
        next();
    }
    catch (error) {
        next(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
    }
};
//# sourceMappingURL=auth.js.map