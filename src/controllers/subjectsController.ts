import { Request, Response } from "express";
import * as subjectsService from "../services/subjectsService";

export async function getSubjects(req: Request, res: Response){
    try{
        const subjects = await subjectsService.getSubjects();
        res.status(200);
        return res.send(subjects);
    } catch{
        return res.sendStatus(500);
    }
}