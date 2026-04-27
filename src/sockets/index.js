import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { initSocket } from '../config/socket.js';
import { registerLocationHandlers } from './location.socket.js';
import { registerRoomHandlers } from './room.socket.js';
import { registerSOSHandlers } from './sos.socket.js';
import { User } from '../modules/users/user.model.js';
export const setupSocketHandlers = (server) => {
    const io = initSocket(server);
    // Connection Middleware: Auth
    io.use(async (socket, next) => {
        try {
            // Check auth token (can be in auth object or query)
            const token = socket.handshake.auth?.token || socket.handshake.query?.token;
            if (!token) {
                return next(new Error('Authentication error: Token missing'));
            }
            const payload = jwt.verify(token, config.jwt.secret);
            const user = await User.findById(payload.sub).select('name avatar');
            if (!user) {
                return next(new Error('Authentication error: User not found'));
            }
            // Attach user object to socket for use in handlers
            socket.user = user;
            next();
        }
        catch (err) {
            next(new Error('Authentication error: Invalid token'));
        }
    });
    io.on('connection', (socket) => {
        const user = socket.user;
        console.log(`[Socket] Client connected: ${socket.id} (User: ${user?.name || 'Anonymous'})`);
        // Register modular handlers
        registerRoomHandlers(io, socket);
        registerLocationHandlers(io, socket);
        registerSOSHandlers(io, socket);
        socket.on('disconnect', (reason) => {
            console.log(`[Socket] Client disconnected: ${socket.id} Reason: ${reason}`);
        });
        socket.on('error', (error) => {
            console.error(`[Socket] Error for ${socket.id}:`, error);
        });
    });
    return io;
};
//# sourceMappingURL=index.js.map