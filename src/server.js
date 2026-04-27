import http from 'http';
import mongoose from 'mongoose';
import app from './app.js';
import { config } from './config/env.js';
import { setupSocketHandlers } from './sockets/index.js';
import { disconnectRedis } from './config/redis.js';
const server = http.createServer(app);
// Initialize Socket.IO with all handlers
const io = setupSocketHandlers(server);
// Database connection
mongoose.connect(config.mongoose.url)
    .then(() => {
    console.log('[Database] Connected to MongoDB');
    server.listen(config.port, () => {
        console.log(`[Server] Running on port ${config.port}`);
    });
})
    .catch((err) => {
    console.error('[Database] Connection error:', err);
    process.exit(1);
});
// Handle graceful shutdown
const shutdown = async (signal) => {
    console.log(`[Server] ${signal} received. Starting graceful shutdown...`);
    // Close the server first (stops accepting new connections)
    server.close(async () => {
        console.log('[Server] HTTP server closed');
        try {
            // Close Socket.IO connections (optional, but good practice)
            io.close();
            console.log('[Socket] Server closed');
            // Close DB connections
            await mongoose.connection.close();
            console.log('[Database] MongoDB connection closed');
            // Close Redis connections
            await disconnectRedis();
            console.log('[Server] Shutdown complete');
            process.exit(0);
        }
        catch (err) {
            console.error('[Server] Error during shutdown:', err);
            process.exit(1);
        }
    });
    // If shutdown takes too long, force exit
    setTimeout(() => {
        console.error('[Server] Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
// For debugging/export
export { server, io };
//# sourceMappingURL=server.js.map