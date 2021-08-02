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

export async function getSubjectProfessors(req: Request, res: Response){
    try{
        const subjectId:number = parseInt(req.params.id);
        if(isNaN(subjectId)){
            return res.sendStatus(400);
        }
        const subject = await subjectsService.getSubjectProfessors(subjectId);
        if(!subject){
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(subject);
    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}