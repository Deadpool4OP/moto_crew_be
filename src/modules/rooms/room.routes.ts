import express from 'express';
import { validate } from '../../middlewares/validate.js';
import { roomController } from './room.controller.js';
import * as roomValidation from './room.validation.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: Ride room management
 */

/**
 * @swagger
 * /rooms/create:
 *   post:
 *     summary: Create a new ride room
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               maxRiders:
 *                 type: number
 *                 default: 10
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
 *                     room:
 *                       $ref: '#/components/schemas/Room'
 */
router.post('/create', auth, validate(roomValidation.createRoom), roomController.createRoom);

/**
 * @swagger
 * /rooms/join:
 *   post:
 *     summary: Join a room using code
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *             properties:
 *               code:
 *                 type: string
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
 *                     room:
 *                       $ref: '#/components/schemas/Room'
 */
router.post('/join', auth, validate(roomValidation.joinRoom), roomController.joinRoom);

/**
 * @swagger
 * /rooms/leave/{roomId}:
 *   post:
 *     summary: Leave a room
 *     tags: [Rooms]
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
 */
router.post('/leave/:roomId', auth, validate(roomValidation.leaveRoom), roomController.leaveRoom);

/**
 * @swagger
 * /rooms/history:
 *   get:
 *     summary: Get all completed rooms the current user was part of
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
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
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Room'
 */
router.get('/history', auth, roomController.getRideHistory);

/**
 * @swagger
 * /rooms/my-rooms:
 *   get:
 *     summary: Get all rooms the current user is part of
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
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
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Room'
 */
router.get('/my-rooms', auth, roomController.getMyRooms);

/**
 * @swagger
 * /rooms/{roomId}:
 *   get:
 *     summary: Get room details
 *     tags: [Rooms]
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
 *                     room:
 *                       $ref: '#/components/schemas/Room'
 */
router.get('/:roomId', auth, validate(roomValidation.getRoom), roomController.getRoom);

/**
 * @swagger
 * /rooms/{roomId}/riders:
 *   get:
 *     summary: Get riders in a room
 *     tags: [Rooms]
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
 *                     riders:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/User'
 */
/**
 * @swagger
 * /rooms/close/{roomId}:
 *   post:
 *     summary: Close a room (host only)
 *     tags: [Rooms]
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
 */
router.post('/close/:roomId', auth, roomController.closeRoom);

// Moved to top of GET routes section

export const roomRoutes = router;
