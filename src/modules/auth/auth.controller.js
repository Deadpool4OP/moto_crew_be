import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { authService } from './auth.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
const register = catchAsync(async (req, res) => {
    const user = await authService.createUser(req.body);
    const tokens = await authService.generateAuthTokens(user);
    res.status(httpStatus.CREATED).send(new ApiResponse(httpStatus.CREATED, 'User registered successfully', { user, tokens }));
});
const login = catchAsync(async (req, res) => {
    const { mobile, password } = req.body;
    const user = await authService.loginUserWithMobileAndPassword(mobile, password);
    const tokens = await authService.generateAuthTokens(user);
    res.send(new ApiResponse(httpStatus.OK, 'Login successful', { user, tokens }));
});
const logout = catchAsync(async (req, res) => {
    // Logic for logout if using refresh tokens or blacklisting
    res.status(httpStatus.NO_CONTENT).send();
});
const me = catchAsync(async (req, res) => {
    res.send(new ApiResponse(httpStatus.OK, 'User details fetched successfully', { user: req.user }));
});
export const authController = {
    register,
    login,
    logout,
    me,
};
//# sourceMappingURL=auth.controller.js.map