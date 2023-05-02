import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import taskRouter from "./routes/taskRouter.js";

import connectDB from "./database/connectDB.js";

const app = express();

const port = process.env.PORT;
const connectionString = process.env.MONGO_URL;

// Start MIDDLEWARES
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);

const startServer = async () => {
  try {
    await connectDB(connectionString);
    console.log("verbindung mit MONGODB hat geklaptt!");
    //
    app.listen(port, () => {
      console.log(`Port läuft auf Port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
