import httpStatus from 'http-status';
import { Room } from './room.model.js';
import { ApiError } from '../../utils/ApiError.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a unique room code
 * @returns {Promise<string>}
 */
const generateRoomCode = async (): Promise<string> => {
  let code = '';
  let isUnique = false;
  while (!isUnique) {
    code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const existingRoom = await Room.findOne({ code });
    if (!existingRoom) isUnique = true;
  }
  return code;
};

/**
 * Create a room
 * @param {Object} roomBody
 * @param {ObjectId} hostId
 * @returns {Promise<Room>}
 */
const createRoom = async (roomBody: any, hostId: string) => {
  const code = await generateRoomCode();
  const room = await Room.create({
    ...roomBody,
    code,
    host: hostId,
    riders: [hostId],
  });
  return room;
};

/**
 * Join a room
 * @param {string} code
 * @param {ObjectId} userId
 * @returns {Promise<Room>}
 */
const joinRoom = async (code: string, userId: string) => {
  const room = await Room.findOne({ code, isActive: true });
  if (!room) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Room not found or inactive');
  }

  if (room.riders.length >= room.maxRiders) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Room is full');
  }

  if (!room.riders.includes(userId as any)) {
    room.riders.push(userId as any);
    await room.save();
  }

  return room;
};

/**
 * Leave a room
 * @param {ObjectId} roomId
 * @param {ObjectId} userId
 * @returns {Promise<Room>}
 */
const leaveRoom = async (roomId: string, userId: string) => {
  const room = await Room.findById(roomId);
  if (!room) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
  }

  room.riders = room.riders.filter((riderId) => riderId.toString() !== userId);
  
  if (room.host.toString() === userId) {
    // If host leaves, maybe assign new host or close room
    if (room.riders.length > 0) {
      room.host = room.riders[0] as any;
    } else {
      room.isActive = false;
    }
  }

  await room.save();
  return room;
};

/**
 * Get room by id
 * @param {ObjectId} id
 * @returns {Promise<Room>}
 */
const getRoomById = async (id: string) => {
  return Room.findById(id).populate('host', 'name avatar').populate('riders', 'name avatar vehicleType');
};

/**
 * Close a room
 * @param {ObjectId} roomId
 * @param {ObjectId} userId
 * @returns {Promise<Room>}
 */
const closeRoom = async (roomId: string, userId: string) => {
  const room = await Room.findById(roomId);
  if (!room) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Room not found');
  }
  if (room.host.toString() !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Only the host can close the room');
  }
  room.isActive = false;
  await room.save();
  return room;
};

/**
 * Get user rooms
 * @param {ObjectId} userId
 * @returns {Promise<Room[]>}
 */
const getMyRooms = async (userId: string) => {
  return Room.find({ riders: userId, isActive: true }).populate('host', 'name avatar').populate('riders', 'name avatar vehicleType');
};

export const roomService = {
  createRoom,
  joinRoom,
  leaveRoom,
  getRoomById,
  getMyRooms,
  getRideHistory,
  closeRoom,
};

/**
 * Get ride history for a user
 * @param {ObjectId} userId
 * @returns {Promise<Room[]>}
 */
async function getRideHistory(userId: string) {
  return Room.find({ riders: userId, isActive: false })
    .populate('host', 'name avatar')
    .populate('riders', 'name avatar vehicleType')
    .sort({ createdAt: -1 });
}
