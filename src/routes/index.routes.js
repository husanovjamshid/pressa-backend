import { Router } from 'express';
import postsRoutes from './posts.routes.js';
import adminRoutes from './admin.routes.js';

const router = Router();

router.use(postsRoutes);
router.use(adminRoutes);
export default router;
