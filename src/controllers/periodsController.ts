import { Request, Response } from "express";
import * as periodsService from "../services/periodsService";

export async function getPeriods(req: Request, res: Response){
    try{
        const periods = await periodsService.getPeriods();
        res.status(200);
        return res.send(periods);
    } catch{
        return res.sendStatus(500);
    }
}