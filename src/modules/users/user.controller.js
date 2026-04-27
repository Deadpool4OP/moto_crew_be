import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { userService } from './user.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { ApiError } from '../../utils/ApiError.js';
const getUser = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(new ApiResponse(httpStatus.OK, 'User fetched successfully', user));
});
const updateProfile = catchAsync(async (req, res) => {
    const user = await userService.updateUserById(req.user.id, req.body);
    res.send(new ApiResponse(httpStatus.OK, 'Profile updated successfully', user));
});
const searchUsers = catchAsync(async (req, res) => {
    const filter = req.query.name ? { name: { $regex: req.query.name, $options: 'i' } } : {};
    const options = {
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
        page: req.query.page ? parseInt(req.query.page) : 1,
        sortBy: req.query.sortBy,
    };
    const result = await userService.queryUsers(filter, options);
    res.send(new ApiResponse(httpStatus.OK, 'Users searched successfully', result));
});
const getStats = catchAsync(async (req, res) => {
    const stats = await userService.getUserStats(req.user.id);
    res.send(new ApiResponse(httpStatus.OK, 'User stats retrieved successfully', stats));
});
export const userController = {
    getUser,
    updateProfile,
    searchUsers,
    getStats,
};
//# sourceMappingURL=user.controller.js.map