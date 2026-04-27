import pkg from 'agora-token';
const { RtcTokenBuilder, RtcRole } = pkg;
import { config } from '../../config/env.js';
import { ApiError } from '../../utils/ApiError.js';
import httpStatus from 'http-status';
/**
 * Generate Agora RTC token
 * @param {string} channelName
 * @param {number} uid
 * @returns {string}
 */
const generateRtcToken = (channelName, uid) => {
    const appId = config.agora.appId;
    const appCertificate = config.agora.appCertificate;
    if (!appId || !appCertificate) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Agora configuration missing');
    }
    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
    const token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs, privilegeExpiredTs);
    return token;
};
export const voiceService = {
    generateRtcToken,
};
//# sourceMappingURL=voice.service.js.map