import { Server, Socket } from 'socket.io';
export const registerRoomHandlers = (io, socket) => {
    const joinRoom = (roomId) => {
        socket.join(roomId);
        // Broadcast user_joined to others in the room
        const user = socket.user;
        socket.to(roomId).emit('user_joined', {
            id: user?.id || user?._id || socket.id,
            name: user?.name || 'Unknown',
            avatar: user?.avatar || '',
            vehicleType: user?.vehicleType || 'bike',
        });
        console.log(`[Socket] User ${socket.id} joined room: ${roomId}`);
    };
    const leaveRoom = (roomId) => {
        socket.leave(roomId);
        // Broadcast user_left to others in the room
        socket.to(roomId).emit('user_left', {
            userId: socket.user?.id || socket.id,
        });
        console.log(`[Socket] User ${socket.id} left room: ${roomId}`);
    };
    socket.on('join_room', joinRoom);
    socket.on('leave_room', leaveRoom);
};
//# sourceMappingURL=room.socket.js.map