import { hashPassword, write, read } from '../utils/model.js';
import { resolve } from 'path';
import jwt from '../utils/jwt.js';

export const LOGIN = (req, res, next) => {
	try {
		const admins = read('admin');
		const { username, password } = req.body;

		const admin = admins.find(
			(admin) => admin.username == username && admin.password == password,
		);
		delete admin.password;

		if (!admin) {
			throw new Error('wrong username or password');
		}

		res.status(200).json({
			status: 200,
			message: 'success',
			access_token: jwt.sign({ id: admin.id }),
			data: admin,
		});
	} catch (error) {
		res.status(400).send({ status: 400, message: error.message });
	}
};
