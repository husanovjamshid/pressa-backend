import { hashPassword, write, read } from '../utils/model.js';
import { resolve } from 'path';

export const GET = (req, res, next) => {
	const posts = read('posts');

	const checkPosts = posts.filter((post) => post.post_status == 'complated');
	res.status(200).json({ status: 200, data: checkPosts });
};

export const POST = (req, res, next) => {
	const posts = read('posts');
	const { post_title, post_body, post_started_date, post_started_time } =
		req.body;

	const { image } = req.file;
};
