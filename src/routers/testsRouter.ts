import express, { Router } from "express";
import * as testsController from "../controllers/testsController";

const testsRouter: Router = express.Router();

testsRouter.get("", testsController.getTests);
testsRouter.get("/professors/:id", testsController.getTestsByProfessor);
testsRouter.get("/subjects/:id", testsController.getTestsBySubject);

testsRouter.post("", testsController.postTest);

export default testsRouter;