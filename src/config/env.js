import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });
export const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    mongoose: {
        url: process.env.MONGODB_URL || 'mongodb://localhost:27017/moto-crew',
    },
    redis: {
        url: process.env.REDIS_URL,
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD || undefined,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
        accessExpirationMinutes: process.env.JWT_EXPIRES_IN || '30d',
    },
    socket: {
        corsOrigin: process.env.SOCKET_CORS_ORIGIN || '*',
    },
    agora: {
        appId: process.env.AGORA_APP_ID || '',
        appCertificate: process.env.AGORA_APP_CERTIFICATE || '',
    },
};
//# sourceMappingURL=env.js.map