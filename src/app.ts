import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app : Express = express();

// imports
const router = require('./routes/routes')

// database
import { connectDB } from './db/connect'

// middleware
app.use(express.json())

// route
app.use("/", router);

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
