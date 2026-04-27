import express from 'express';
import { voiceController } from './voice.controller.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Voice
 *   description: Real-time voice communication
 */

/**
 * @swagger
 * /voice/token:
 *   get:
 *     summary: Get voice channel token (Agora)
 *     tags: [Voice]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: channelName
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           enum: [publisher, subscriber]
 *           default: publisher
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                     appId:
 *                       type: string
 *                     channelName:
 *                       type: string
 *                     uid:
 *                       type: number
 */
router.get('/token', auth, voiceController.getToken);

export const voiceRoutes = router;
