import { Router } from 'express';
import { GET, GET_BY_ID, POST } from '../controllers/posts.controller.js';

const router = Router();

router.get('/posts', GET);
router.get('/posts/:id', GET_BY_ID)
router.post('/ancement', POST);

export default router;
