import { serve, setup } from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { Router } from 'express';
// const router = require('express').Router();
const router = Router();

const PORT = 5000;

const swaggerDocs = swaggerJsDoc({
	swaggerDefinition: {
		openapi: '3.0.1',
		servers: [
			{
				url: 'http://localhost:{port}',
				description: 'Book server',
				variables: {
					port: {
						enum: [PORT],
						default: PORT,
					},
				},
			},
		],
		components: {
			securitySchemes: {
				Bearer: {
					type: 'apiKey',
					name: 'Authorization',
					in: 'header',
					description: 'Please use login api to get accessToken',
				},
			},
		},
	},

	apis: [`${__dirname}/docs/**/*.yaml`, `${__dirname}/components/**/*.yaml`],
});

router.use('/', serve, setup(swaggerDocs));

export default router;
