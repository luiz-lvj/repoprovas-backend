import express, { Router } from "express";
import * as periodsController from "../controllers/periodsController"; 

const periodsRouter: Router = express.Router();

periodsRouter.get("", periodsController.getPeriods);

export default periodsRouter;