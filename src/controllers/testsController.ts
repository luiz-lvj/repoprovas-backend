import { Request, Response } from "express";
import * as testsService from "../services/testsService";

export async function getTests(req: Request, res: Response){
    try{
        const tests = await testsService.getTests();
        res.status(200);
        return res.send(tests);
    } catch{
        return res.sendStatus(500);
    }
}

export async function postTest(req: Request, res: Response){
    try{
        const isPosted = testsService.postTest(req.body);
        if(!isPosted){
            return res.sendStatus(400);
        }
        return res.sendStatus(201);
        
    } catch{
        return res.sendStatus(500);
    }
}