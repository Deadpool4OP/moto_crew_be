import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { createAdapter } from '@socket.io/redis-adapter';
import { pubClient, subClient } from './redis.js';
import { config } from './env.js';
let io;
export const initSocket = (httpServer) => {
    const options = {
        cors: {
            origin: config.socket.corsOrigin,
            methods: ['GET', 'POST'],
            credentials: true,
        },
        // Production settings
        pingTimeout: 60000,
        pingInterval: 25000,
    };
    io = new Server(httpServer, options);
    // Attach Redis adapter for horizontal scaling
    io.adapter(createAdapter(pubClient, subClient));
    console.log('[Socket] Initialized with Redis adapter');
    return io;
};
export const getIO = () => {
    if (!io) {
        throw new Error('Socket.io not initialized. Call initSocket(httpServer) first.');
    }
    return io;
};
//# sourceMappingURL=socket.js.map