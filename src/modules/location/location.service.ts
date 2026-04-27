import { Location } from './location.model.js';

/**
 * Update user location in a room
 * @param {ObjectId} userId
 * @param {ObjectId} roomId
 * @param {Object} locationData
 * @returns {Promise<Location>}
 */
const updateLocation = async (userId: string, roomId: string, locationData: any) => {
  const { lat, lng, heading, speed } = locationData;
  return Location.findOneAndUpdate(
    { userId, roomId },
    {
      location: {
        type: 'Point',
        coordinates: [lng, lat],
        heading,
        speed,
      },
      timestamp: new Date(),
    },
    { upsert: true, new: true }
  );
};

/**
 * Get all rider locations in a room
 * @param {ObjectId} roomId
 * @returns {Promise<Location[]>}
 */
const getLocationByRoom = async (roomId: string) => {
  return Location.find({ roomId }).populate('userId', 'name avatar vehicleType');
};

export const locationService = {
  updateLocation,
  getLocationByRoom,
};
