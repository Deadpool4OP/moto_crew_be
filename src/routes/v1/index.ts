import express from 'express';
import { authRoutes } from '../../modules/auth/auth.routes.js';
import { userRoutes } from '../../modules/users/user.routes.js';
import { roomRoutes } from '../../modules/rooms/room.routes.js';
import { locationRoutes } from '../../modules/location/location.routes.js';
import { sosRoutes } from '../../modules/sos/sos.routes.js';
import { voiceRoutes } from '../../modules/voice/voice.routes.js';
import { crewRoutes } from '../../modules/crews/crew.routes.js';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/rooms',
    route: roomRoutes,
  },
  {
    path: '/location',
    route: locationRoutes,
  },
  {
    path: '/sos',
    route: sosRoutes,
  },
  {
    path: '/voice',
    route: voiceRoutes,
  },
  {
    path: '/crews',
    route: crewRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
