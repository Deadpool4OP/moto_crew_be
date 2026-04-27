import express from 'express';
import { validate } from '../../middlewares/validate.js';
import { sosController } from './sos.controller.js';
import * as sosValidation from './sos.validation.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SOS
 *   description: Emergency SOS alarm management
 */

/**
 * @swagger
 * /sos/create:
 *   post:
 *     summary: Create an SOS alarm
 *     tags: [SOS]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roomId
 *               - location
 *             properties:
 *               roomId:
 *                 type: string
 *               message:
 *                 type: string
 *               location:
 *                 type: object
 *                 properties:
 *                   latitude:
 *                     type: number
 *                   longitude:
 *                     type: number
 *     responses:
 *       "201":
 *         description: Created
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
 *                     sos:
 *                       $ref: '#/components/schemas/SOS'
 */
router.post('/create', auth, validate(sosValidation.createSos), sosController.createSos);

/**
 * @swagger
 * /sos/{roomId}:
 *   get:
 *     summary: Get active SOS alarms for a room
 *     tags: [SOS]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         schema:
 *           type: string
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
 *                     sos:
 *                       $ref: '#/components/schemas/SOS'
 */
router.get('/:roomId', auth, validate(sosValidation.getSosByRoom), sosController.getSosByRoom);

export const sosRoutes = router;
