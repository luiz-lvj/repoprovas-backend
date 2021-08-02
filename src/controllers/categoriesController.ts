import { Request, Response } from "express";7
import * as categoriesService from "../services/categoriesService";

export async function getCategories(req: Request, res: Response){
    try{
        const categories = await categoriesService.getCategories();
        res.status(200);
        return res.send(categories);
    } catch{
        return res.sendStatus(500);
    }
}