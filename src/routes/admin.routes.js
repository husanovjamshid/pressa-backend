import { Router } from 'express';
import { LOGIN } from '../controllers/admin.controller.js';
import validate from '../middlewares/validate.js';

const router = Router();

router.post('/login', validate, LOGIN);

export default router;
