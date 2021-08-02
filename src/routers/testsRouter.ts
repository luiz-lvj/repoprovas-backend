import express, { Router } from "express";
import * as testsController from "../controllers/testsController";

const testsRouter: Router = express.Router();

testsRouter.get("", testsController.getTests);

export default testsRouter;