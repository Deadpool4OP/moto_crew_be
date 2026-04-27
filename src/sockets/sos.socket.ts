import { Server, Socket } from 'socket.io';

interface SOSData {
  roomId: string;
  type: string;
  location: {
    lat: number;
    lng: number;
  };
}

export const registerSOSHandlers = (io: Server, socket: Socket) => {
  const sendSOS = (data: SOSData) => {
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
      userId: (socket as any).user?.id || socket.id,
      type,
      location,
      timestamp: new Date().toISOString(),
    });
  };

  socket.on('send_sos', sendSOS);
};
