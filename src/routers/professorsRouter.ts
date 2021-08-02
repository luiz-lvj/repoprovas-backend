import express, { Router } from "express";
import * as professorsController from "../controllers/professorsController";

const professorsRouter: Router = express.Router();

professorsRouter.get("", professorsController.getProfessors);
professorsRouter.get("/:id/subjects", professorsController.getProfessorSubjects);

export default professorsRouter;