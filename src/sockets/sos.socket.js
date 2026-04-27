import { Server, Socket } from 'socket.io';
export const registerSOSHandlers = (io, socket) => {
    const sendSOS = (data) => {
        const { roomId, type, location } = data;
        if (!roomId || !type || !location) {
            return socket.emit('error', { message: 'Invalid SOS data' });
        }
        console.log(`[SOS] Received from ${socket.id} in room ${roomId}`);
        // Broadcast to entire room including sender (or use io.to(roomId))
        // Usually for SOS, the sender might also want confirmation or see it on their UI 
        // but the requirement says "broadcast to other users" usually, 
        // however SOS often needs to be seen by all.
        io.to(roomId).emit('receive_sos', {
            userId: socket.user?.id || socket.id,
            type,
            location,
            timestamp: new Date().toISOString(),
        });
    };
    socket.on('send_sos', sendSOS);
};
//# sourceMappingURL=sos.socket.js.map