import { hashPassword, write, read } from '../utils/model.js';
import { resolve } from 'path';
import jwt from '../utils/jwt.js';
import { pagination } from '../utils/pagination.js';

export const LOGIN = (req, res, next) => {
	try {
		const admins = read('admin');
		const { username, password } = req.body;

		const hash_password = hashPassword(password);
		const admin = admins.find(
			(admin) => admin.username == username && admin.password == hash_password,
		);

		delete admin.token
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

export const GET = (req, res, next) => {
	const posts = read('posts');
	const authors = read('author');
	const category = read('category');
	const subCategory = read('subCategory');

	let { page } = req.query;
	page = page || pagination.page;
	const limit = pagination.limit;

	posts.map((post) => {
		post.author = authors.filter(
			(author_item) => post.author_id == author_item.author_id,
		);
		post.category = category.filter(
			(category_item) => post.category_id == category_item.category_id,
		);
		post.sub_category = subCategory.filter(
			(subCategory_item) =>
				post.sub_category_id == subCategory_item.sub_category_id,
		);
	});
	const verifyPosts = posts
		.filter((post) => post.post_status == false)
		.slice((page - 1) * limit, page * limit);

	res.status(200).json({ status: 200, page: page, data: verifyPosts });
};

export const PATCH = (req, res, next) => {
	const { id } = req.params;
	const { post_status } = req.body;

	console.log(id);
	console.log(post_status);
	const posts = read('posts');

	const newPosts = posts.find((item) => item.post_id == id);
	console.log(newPosts);

	newPosts.post_status = post_status || newPosts.post_status;

	write('posts', posts);

	if (post_status == false) {
		const newPosts = posts.filter((item) => item.post_id != id);
		write('posts', newPosts);
	}

	res.status(200).json({ status: 200, message: 'Post changed' });
};
