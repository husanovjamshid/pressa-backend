import { write, read } from '../utils/model.js';
import { pagination } from '../utils/pagination.js';

export const GET = (req, res, next) => {
	const posts = read('posts');
	const authors = read('author');
	const category = read('category');
	const subCategory = read('subCategory');

	let { page, post_type, post_date, post_time } = req.query;
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

	if (post_type || post_date || post_time) {
		const filteredPost = posts.filter((item) => {
			return (
				item.post_type == post_type ||
				item.post_date == post_date ||
				item.post_time == post_time
			);
		});

		const verifyPosts = filteredPost
			.filter((post) => post.post_status == true)
			.slice((page - 1) * limit, page * limit);

		res.status(200).json({
			status: 200,
			page: +page,
			data: verifyPosts,
		});
	} else {
		const verifyPosts = posts
			.filter((post) => post.post_status == true)
			.slice((page - 1) * limit, page * limit);
		res.status(200).json({
			status: 200,
			page: +page,
			data: verifyPosts,
		});
	}
};

export const GET_BY_ID = (req, res, next) => {
	const posts = read('posts');
	try {
		const { id } = req.params;

		const getPosts = posts.find((post) => post.post_id == id);
		if (getPosts == undefined) {
			throw new Error('Params not found');
		}

		getPosts.post_view_count += 1;

		write('posts', posts);
		res.status(200).json({ status: 200, data: getPosts });
	} catch (error) {
		res.status(400).json({ status: 400, message: error.message });
	}
};

export const POST = (req, res, next) => {
	const posts = read('posts');
	const authors = read('author');

	const { filename } = req.file;
	const {
		post_title,
		post_desc,
		post_link,
		author_name,
		author_number,
		author_role,
		post_time,
		post_date,
		post_type,
		category_id,
		sub_category_id,
	} = req.body;

	const newAuthor = {
		author_id: authors.at(-1)?.author_id + 1 || 1,
		author_name,
		author_number,
		author_role,
	};

	const newPost = {
		post_id: posts.at(-1)?.post_id + 1 || 1,
		post_title,
		post_desc,
		post_link,
		author_id: authors.at(-1)?.author_id + 1,
		post_time,
		post_img: filename,
		post_date,
		post_type,
		post_view_count: 0,
		category_id: +category_id,
		sub_category_id: +sub_category_id,
		post_status: 'uncomplated',
	};

	write('posts', [...posts, newPost]);
	write('author', [...authors, newAuthor]);

	res
		.status(201)
		.json({ status: 201, message: 'ok', data: [...posts, newPost] });
};
