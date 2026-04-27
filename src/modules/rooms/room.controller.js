import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { roomService } from './room.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { ApiError } from '../../utils/ApiError.js';
const createRoom = catchAsync(async (req, res) => {
    console.log('[RoomController] Creating room with body:', JSON.stringify(req.body, null, 2));
    try {
        const room = await roomService.createRoom(req.body, req.user.id);
        console.log('[RoomController] Room created successfully:', room.id || room._id);
        res.status(httpStatus.CREATED).send(new ApiResponse(httpStatus.CREATED, 'Room created successfully', room));
    }
    catch (error) {
        console.error('[RoomController] Create room error:', error);
        throw error;
    }
});
const joinRoom = catchAsync(async (req, res) => {
    const room = await roomService.joinRoom(req.body.code, req.user.id);
    res.send(new ApiResponse(httpStatus.OK, 'Joined room successfully', room));
});
const leaveRoom = catchAsync(async (req, res) => {
    const room = await roomService.leaveRoom(req.params.roomId, req.user.id);
    res.send(new ApiResponse(httpStatus.OK, 'Left room successfully', room));
});
const getRoom = catchAsync(async (req, res) => {
    const room = await roomService.getRoomById(req.params.roomId);
    if (!room) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
    }
    res.send(new ApiResponse(httpStatus.OK, 'Room fetched successfully', room));
});
const getRiders = catchAsync(async (req, res) => {
    const room = await roomService.getRoomById(req.params.roomId);
    if (!room) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
    }
    res.send(new ApiResponse(httpStatus.OK, 'Riders fetched successfully', room.riders));
});
const closeRoom = catchAsync(async (req, res) => {
    const room = await roomService.closeRoom(req.params.roomId, req.user.id);
    res.send(new ApiResponse(httpStatus.OK, 'Room closed successfully', room));
});
const getMyRooms = catchAsync(async (req, res) => {
    const rooms = await roomService.getMyRooms(req.user.id);
    res.send(new ApiResponse(httpStatus.OK, 'My rooms fetched successfully', rooms));
});
const getRideHistory = catchAsync(async (req, res) => {
    const history = await roomService.getRideHistory(req.user.id);
    res.send(new ApiResponse(httpStatus.OK, 'Ride history fetched successfully', history));
});
export const roomController = {
    createRoom,
    joinRoom,
    leaveRoom,
    getRoom,
    getRiders,
    getMyRooms,
    getRideHistory,
    closeRoom,
};
//# sourceMappingURL=room.controller.js.map