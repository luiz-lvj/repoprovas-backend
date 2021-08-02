import { Request, Response } from "express";
import * as professorsService from "../services/professorsService";

export async function getProfessors(req: Request , res: Response){
    try{
        const professors = await professorsService.getProfessors();
        res.status(200);
        return res.send(professors);
    } catch{
        return res.sendStatus(500);
    }
}

export async function getProfessorSubjects(req: Request, res: Response){
    try{
        const professorId:number = parseInt(req.params.id);
        if(isNaN(professorId)){
            return res.sendStatus(400);
        }
        const professor = await professorsService.getProfessorSubjects(professorId);
        if(!professor){
            return res.sendStatus(404);
        }
        res.status(200);
        return res.send(professor);
    } catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}