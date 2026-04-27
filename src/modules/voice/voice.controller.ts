import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { voiceService } from './voice.service.js';
import { roomService } from '../rooms/room.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { ApiError } from '../../utils/ApiError.js';

const getToken = catchAsync(async (req: any, res: any) => {
  const { roomId } = req.query;
  if (!roomId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room ID is required');
  }

  const room = await roomService.getRoomById(roomId);
  if (!room) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
  }

  // Check if user is in room
  const isUserInRoom = room.riders.some((rider: any) => rider._id.toString() === req.user.id);
  if (!isUserInRoom) {
    throw new ApiError(httpStatus.FORBIDDEN, 'User not in room');
  }

  // Agora UID must be a number. We can use a hash of user ID or just a random number
  // For simplicity, let's use a 32-bit integer hash or just 0 (let Agora assign)
  // Actually, UID 0 is allowed for let-agora-choose, but for tokens, better to have one
  const uid = Math.floor(Math.random() * 1000000); 

  const token = voiceService.generateRtcToken(roomId, uid);
  
  res.send(new ApiResponse(httpStatus.OK, 'Token generated successfully', { 
    token, 
    uid,
    channel: roomId,
    appId: process.env.AGORA_APP_ID 
  }));
});

export const voiceController = {
  getToken,
};
