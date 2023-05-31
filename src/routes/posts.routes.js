import { Router } from 'express';
import { GET, GET_BY_ID, POST } from '../controllers/posts.controller.js';
import upload from '../utils/multer.js';

const router = Router();

router.get('/posts', GET);
router.get('/posts/:id', GET_BY_ID)
router.post('/posts',upload.single('image'), POST);

export default router;
