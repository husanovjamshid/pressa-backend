import { Router } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 9090;

const router = Router();

const swaggerDoc = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "pressa backend",
      description: "pressa servers",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
   
  },
  apis: [
    `${process.cwd()}/src/swagger/components/*.yaml`,
    `${process.cwd()}/src/swagger/api/*.yaml`,
  ],
});

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default router;