import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import professorsRouter from "./routers/professorsRouter";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/professors", professorsRouter);


export async function init () {
  await connectDatabase();
}

export default app;
