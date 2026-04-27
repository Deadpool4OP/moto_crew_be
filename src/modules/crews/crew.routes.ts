import express from 'express';
import { validate } from '../../middlewares/validate.js';
import { crewController } from './crew.controller.js';
import * as crewValidation from './crew.validation.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Crews
 *   description: Rider community management
 */

router.post('/create', auth, validate(crewValidation.createCrew), crewController.createCrew);
router.get('/my-crews', auth, crewController.getMyCrews);
router.post('/join/:crewId', auth, validate(crewValidation.getCrew), crewController.joinCrew);
router.get('/:crewId', auth, validate(crewValidation.getCrew), crewController.getCrew);

export const crewRoutes = router;
