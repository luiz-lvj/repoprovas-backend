import express, { Router } from "express";
import * as subjectsController from "../controllers/subjectsController";

const subjectsRouter: Router = express.Router();

subjectsRouter.get("/:id/professors", subjectsController.getSubjectProfessors)
subjectsRouter.get("", subjectsController.getSubjects);

export default subjectsRouter;