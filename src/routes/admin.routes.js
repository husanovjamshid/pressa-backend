import { Router } from 'express';
import { GET, LOGIN, PATCH } from '../controllers/admin.controller.js';
import validate from '../middlewares/validate.js';
import checkToken from '../middlewares/checkToken.js';

const router = Router();

router.post('/login', validate, LOGIN);
router.get('/admin',checkToken, GET)
router.patch('/admin/:id', PATCH)

export default router;
