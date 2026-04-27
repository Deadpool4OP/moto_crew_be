import express from 'express';
import { validate } from '../../middlewares/validate.js';
import { locationController } from './location.controller.js';
import * as locationValidation from './location.validation.js';
import { auth } from '../../middlewares/auth.js';
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Location
 *   description: Real-time rider location tracking
 */
/**
 * @swagger
 * /location/update:
 *   post:
 *     summary: Update rider location
 *     tags: [Location]
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
 *               - latitude
 *               - longitude
 *             properties:
 *               roomId:
 *                 type: string
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *               speed:
 *                 type: number
 *               heading:
 *                 type: number
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
 */
router.post('/update', auth, validate(locationValidation.updateLocation), locationController.updateLocation);
/**
 * @swagger
 * /location/{roomId}:
 *   get:
 *     summary: Get all riders locations in a room
 *     tags: [Location]
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
 *                     locations:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Location'
 */
router.get('/:roomId', auth, validate(locationValidation.getLocationByRoom), locationController.getLocationByRoom);
export const locationRoutes = router;
//# sourceMappingURL=location.routes.js.map