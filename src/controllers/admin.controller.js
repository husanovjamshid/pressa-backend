import { hashPassword, write, read } from '../utils/model.js';
import { resolve } from 'path';

export const POST = (req, res, next) => {
	const posts = read('admin');
	const { admin_username, admin_password } = req.body;
    const password = hashPassword()
};
