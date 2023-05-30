import { LoginSchema } from '../utils/validation.js';

export default (req, res, next) => {
	try {
		if (req.url === '/login' && req.method === 'POST') {
			const { error } = LoginSchema.validate(req.body);
			if (error) throw Error(error);
		}
        next()
	} catch (error) {
		return next(error);
	}
};
