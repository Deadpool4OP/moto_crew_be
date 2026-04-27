import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import httpStatus from 'http-status';
import { config } from './config/env.js';
import { errorConverter, errorHandler } from './middlewares/error.js';
import { ApiError } from './utils/ApiError.js';
import { apiLimiter } from './middlewares/rateLimiter.js';
import routes from './routes/v1/index.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger.js';
const app = express();
if (config.env !== 'test') {
    app.use(morgan('dev'));
}
// Set security HTTP headers
app.use(helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false,
    strictTransportSecurity: false,
}));
// Parse json request body
app.use(express.json());
// Parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// Enable cors
app.use(cors());
// Rate limiting
app.use('/api', apiLimiter);
// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// v1 api routes
app.use('/api/v1', routes);
// Health check
app.get('/health', (req, res) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: 'Server is healthy',
        data: { timestamp: new Date() }
    });
});
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
// convert error to ApiError, if needed
app.use(errorConverter);
// handle error
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map