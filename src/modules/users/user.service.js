import httpStatus from 'http-status';
import { User } from './user.model.js';
import { Room } from '../rooms/room.model.js';
import { ApiError } from '../../utils/ApiError.js';
/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
    return User.findById(id);
};
/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
    return User.findOne({ email });
};
/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    Object.assign(user, updateBody);
    await user.save();
    return user;
};
/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
    const { limit = 10, page = 1, sortBy } = options;
    const skip = (page - 1) * limit;
    let sort = '';
    if (sortBy) {
        const parts = sortBy.split(':');
        sort = (parts[1] === 'desc' ? '-' : '') + parts[0];
    }
    else {
        sort = 'createdAt';
    }
    const users = await User.find(filter).sort(sort).skip(skip).limit(limit);
    const totalResults = await User.countDocuments(filter);
    const totalPages = Math.ceil(totalResults / limit);
    return {
        results: users,
        page,
        limit,
        totalPages,
        totalResults,
    };
};
/**
 * Get user statistics
 * @param {string} userId
 * @returns {Promise<Object>}
 */
const getUserStats = async (userId) => {
    const user = await getUserById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    // Count total rooms the user has participated in
    const totalRides = await Room.countDocuments({ riders: userId });
    // Count unique riders the user has met
    const myRooms = await Room.find({ riders: userId }).select('riders');
    const uniqueRiders = new Set();
    myRooms.forEach((room) => {
        room.riders.forEach((riderId) => {
            if (riderId.toString() !== userId) {
                uniqueRiders.add(riderId.toString());
            }
        });
    });
    // Calculate rank based on totalPoints
    const rank = await User.countDocuments({ totalPoints: { $gt: user.totalPoints || 0 } }) + 1;
    return {
        totalDistance: user.totalDistance || 0,
        totalRides,
        crewSize: uniqueRiders.size,
        friends: uniqueRiders.size,
        rank,
        points: user.totalPoints || 0,
    };
};
export const userService = {
    getUserById,
    getUserByEmail,
    updateUserById,
    queryUsers,
    getUserStats,
};
//# sourceMappingURL=user.service.js.map