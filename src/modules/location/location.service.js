import { Location } from './location.model.js';
/**
 * Update user location in a room
 * @param {ObjectId} userId
 * @param {ObjectId} roomId
 * @param {Object} locationData
 * @returns {Promise<Location>}
 */
const updateLocation = async (userId, roomId, locationData) => {
    const { lat, lng, heading, speed } = locationData;
    return Location.findOneAndUpdate({ userId, roomId }, {
        location: {
            type: 'Point',
            coordinates: [lng, lat],
            heading,
            speed,
        },
        timestamp: new Date(),
    }, { upsert: true, new: true });
};
/**
 * Get all rider locations in a room
 * @param {ObjectId} roomId
 * @returns {Promise<Location[]>}
 */
const getLocationByRoom = async (roomId) => {
    return Location.find({ roomId }).populate('userId', 'name avatar vehicleType');
};
export const locationService = {
    updateLocation,
    getLocationByRoom,
};
//# sourceMappingURL=location.service.js.map