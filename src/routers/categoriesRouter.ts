import express, { Router } from "express";
import * as categoriesController from "../controllers/categoriesController"; 

const categoriesRouter: Router = express.Router();

categoriesRouter.get("", categoriesController.getCategories);

export default categoriesRouter;