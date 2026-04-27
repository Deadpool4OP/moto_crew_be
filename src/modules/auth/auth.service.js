import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { User } from '../users/user.model.js';
import { ApiError } from '../../utils/ApiError.js';
import { config } from '../../config/env.js';
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
    if (userBody.email && await User.isEmailTaken(userBody.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    if (await User.isMobileTaken(userBody.mobile)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile number already taken');
    }
    return User.create(userBody);
};
/**
 * Login with mobile and password
 * @param {string} mobile
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithMobileAndPassword = async (mobile, password) => {
    const user = await User.findOne({ mobile });
    if (!user || !(await user.isPasswordMatch(password))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect mobile or password');
    }
    return user;
};
/**
 * Generate token
 * @param {ObjectId} userId
 * @param {string} expires
 * @param {string} secret
 * @returns {string}
 */
const generateToken = (userId, expires, secret = config.jwt.secret) => {
    const payload = {
        sub: userId,
        iat: Math.floor(Date.now() / 1000),
        // exp is handled by sign if we pass expires as a string like '30d'
    };
    return jwt.sign(payload, secret, { expiresIn: expires });
};
/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
    const accessToken = generateToken(user.id, config.jwt.accessExpirationMinutes);
    return {
        access: {
            token: accessToken,
            expires: config.jwt.accessExpirationMinutes,
        },
    };
};
export const authService = {
    createUser,
    loginUserWithMobileAndPassword,
    generateAuthTokens,
};
//# sourceMappingURL=auth.service.js.map