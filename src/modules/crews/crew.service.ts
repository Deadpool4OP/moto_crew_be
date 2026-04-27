import httpStatus from 'http-status';
import { Crew } from './crew.model.js';
import { ApiError } from '../../utils/ApiError.js';

/**
 * Create a crew
 * @param {Object} crewBody
 * @param {ObjectId} adminId
 * @returns {Promise<Crew>}
 */
const createCrew = async (crewBody: any, adminId: string) => {
  if (await Crew.findOne({ name: crewBody.name })) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Crew name already taken');
  }
  return Crew.create({
    ...crewBody,
    admin: adminId,
    members: [adminId],
  });
};

/**
 * Get user's crews
 * @param {ObjectId} userId
 * @returns {Promise<Crew[]>}
 */
const getMyCrews = async (userId: string) => {
  return Crew.find({ members: userId }).populate('admin', 'name avatar').sort({ createdAt: -1 });
};

/**
 * Get crew by id
 * @param {ObjectId} id
 * @returns {Promise<Crew>}
 */
const getCrewById = async (id: string) => {
  return Crew.findById(id).populate('admin', 'name avatar').populate('members', 'name avatar vehicleType');
};

/**
 * Join a crew
 * @param {ObjectId} crewId
 * @param {ObjectId} userId
 * @returns {Promise<Crew>}
 */
const joinCrew = async (crewId: string, userId: string) => {
  const crew = await Crew.findById(crewId);
  if (!crew) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Crew not found');
  }
  if (!crew.members.includes(userId as any)) {
    crew.members.push(userId as any);
    await crew.save();
  }
  return crew;
};

export const crewService = {
  createCrew,
  getMyCrews,
  getCrewById,
  joinCrew,
};
