import { Router } from 'express';
import postsRoutes from './posts.routes.js';

const router = Router();

router.use(postsRoutes);

export default router;
