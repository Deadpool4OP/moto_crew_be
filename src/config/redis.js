import { Redis } from 'ioredis';
import { config } from './env.js';
const commonOptions = {
    retryStrategy: (times) => {
        // Exponential backoff with a cap of 10 seconds
        const delay = Math.min(times * 50, 10000);
        return delay;
    },
    maxRetriesPerRequest: null, // Essential for some ioredis features
};
const createClient = () => {
    if (config.redis.url) {
        return new Redis(config.redis.url, commonOptions);
    }
    return new Redis({
        host: config.redis.host,
        port: config.redis.port,
        password: config.redis.password,
        ...commonOptions,
    });
};
// Main Redis client for general caching/storage
export const redis = createClient();
// Clients for Socket.IO Redis adapter
export const pubClient = createClient();
export const subClient = createClient();
const handleConnection = (client, name) => {
    client.on('connect', () => {
        console.log(`[Redis] ${name} connected`);
    });
    client.on('error', (err) => {
        console.error(`[Redis] ${name} error:`, err.message);
    });
    client.on('reconnecting', () => {
        console.log(`[Redis] ${name} reconnecting...`);
    });
};
handleConnection(redis, 'Main');
handleConnection(pubClient, 'PubClient');
handleConnection(subClient, 'SubClient');
export const disconnectRedis = async () => {
    await Promise.all([
        redis.quit(),
        pubClient.quit(),
        subClient.quit(),
    ]);
    console.log('[Redis] All connections closed');
};
//# sourceMappingURL=redis.js.map