import swaggerJsdoc from 'swagger-jsdoc';
import { config } from '../config/env.js';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Moto Crew API Documentation',
    version: '1.0.0',
    description: 'API layer for Moto Crew real-time rider tracking application',
  },
  servers: [
    {
      url: `http://localhost:${config.port}/api/v1`,
      description: 'Development Server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['src/modules/**/*.routes.ts', 'src/docs/*.yml'], // paths to files with swagger annotations
};

export const swaggerSpec = swaggerJsdoc(options);
