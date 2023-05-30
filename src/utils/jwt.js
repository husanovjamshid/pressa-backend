import jwt from 'jsonwebtoken';
import 'dotenv/config';
const SECRET = process.env.SECRET;

export default {
	sign: (payload) => jwt.sign(payload, SECRET),
	verify: (token) => jwt.verify(token, SECRET),
};
