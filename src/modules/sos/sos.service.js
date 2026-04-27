import { SOS } from './sos.model.js';
/**
 * Create SOS event
 * @param {ObjectId} userId
 * @param {Object} sosData
 * @returns {Promise<SOS>}
 */
const createSos = async (userId, sosData) => {
    return SOS.create({
        userId,
        ...sosData,
    });
};
/**
 * Get active SOS events in a room
 * @param {ObjectId} roomId
 * @returns {Promise<SOS[]>}
 */
const getSosByRoom = async (roomId) => {
    return SOS.find({ roomId, status: 'active' }).populate('userId', 'name avatar vehicleType');
};
export const sosService = {
    createSos,
    getSosByRoom,
};
//# sourceMappingURL=sos.service.js.map