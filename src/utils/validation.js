import Joi from 'joi';

export const LoginSchema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
});

export const PostSchema = Joi.object({
	post_title: Joi.string().required(),
	post_body: Joi.string().required(),
	post_date: Joi.string().required(),
	post_time: Joi.string().required(),
	post_image: Joi.string().required(),

	post_type: Joi.string().required(),

	post_link: Joi.string().required(),
	author_id: Joi.number().required(),
	post_count: Joi.number().required(),
    post_count: Joi.number().required(),

});
