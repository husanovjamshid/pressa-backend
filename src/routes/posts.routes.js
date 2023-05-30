import { Router } from 'express';
import { GET, POST } from '../controllers/posts.controller.js';

const router = Router();

router.get('/', GET);
router.post('/ancement', POST);

export default router;
