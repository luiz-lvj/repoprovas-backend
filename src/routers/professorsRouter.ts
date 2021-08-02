import express, { Router } from "express";
import * as professorsController from "../controllers/professorsController";

const professorsRouter: Router = express.Router();

professorsRouter.get("/:id/subjects", professorsController.getProfessorSubjects);
professorsRouter.get("", professorsController.getProfessors);


export default professorsRouter;