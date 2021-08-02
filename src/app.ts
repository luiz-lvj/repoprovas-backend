import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import professorsRouter from "./routers/professorsRouter";
import subjectsRouter from "./routers/subjectsRouter";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/professors", professorsRouter);
app.use("/subjects", subjectsRouter);


export async function init () {
  await connectDatabase();
}

export default app;
