import SwaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
	swaggerDefinition: {
		info: {
			title: 'pressa',
		},
		// basaPath: '/',
	},
	apis: ['../../src/swagger/docs/*.yaml'],
};

const specs = swaggerJSDoc(options);

function swaggerDocs(app) {
	app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));
}
export default swaggerDocs;
