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