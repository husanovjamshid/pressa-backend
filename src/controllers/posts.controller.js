import { hashPassword, write, read } from '../utils/model.js';
import { resolve } from 'path';

export const GET = (req, res, next) => {
	const posts = read('posts');
	const authors = read('author');

	const checkPosts = posts.filter((post) => post.author_id);

	res.status(200).json({ status: 200, data: checkPosts });
};

export const GET_BY_ID = (req, res, next) => {
	const posts = read('posts');
	try {
		const { id } = req.params;

		const getPosts = posts.find((post) => post.post_id == id);
		if (getPosts == undefined) {
			throw new Error('Params not found');
		}
		res.status(200).json({ status: 200, data: getPosts });
	} catch (error) {
        res.status(400).json({ status: 400, message: error.message });

    }
};

export const POST = (req, res, next) => {
	const posts = read('posts');
	const { post_title, post_body, post_started_date, post_started_time } =
		req.body;

	const { image } = req.file;
};
