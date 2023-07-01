import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors'
dotenv.config();

const app : Express = express();
const router = require('./routes/routes')

// Swagger
import swagger from 'swagger-ui-express'
import yaml from 'yamljs'
const swagger_path =  path.resolve(__dirname,'../swagger.yaml');
const swaggerDocument = yaml.load(swagger_path)

// database
import { connectDB } from './db/connect'

// middleware
app.use(express.json())
app.use(cors())

// route
app.use("", router);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument))

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
