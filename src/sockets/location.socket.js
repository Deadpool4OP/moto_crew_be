import { Server, Socket } from 'socket.io';
// Simple in-memory rate limiting (per socket)
// In production, consider Redis for distributed rate limiting if needed
const lastUpdateMap = new Map();
const RATE_LIMIT_MS = 1000; // 1 update per second
export const registerLocationHandlers = (io, socket) => {
    const sendLocation = (data) => {
        const { roomId, lat, lng } = data;
        if (!roomId || lat === undefined || lng === undefined) {
            return socket.emit('error', { message: 'Invalid location data' });
        }
        // Rate limiting
        const now = Date.now();
        const lastUpdate = lastUpdateMap.get(socket.id) || 0;
        if (now - lastUpdate < RATE_LIMIT_MS) {
            return; // Ignore updates that are too frequent
        }
        lastUpdateMap.set(socket.id, now);
        // Broadcast to room (excluding sender)
        socket.to(roomId).emit('receive_location', {
            userId: socket.user?.id || socket.id,
            lat,
            lng,
            timestamp: new Date().toISOString(),
        });
    };
    socket.on('send_location', sendLocation);
    socket.on('disconnect', () => {
        lastUpdateMap.delete(socket.id);
    });
};
//# sourceMappingURL=location.socket.js.map