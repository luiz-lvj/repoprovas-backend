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

export async function getTestsByProfessor(req: Request, res: Response){
    try{
        const professorId:number = parseInt(req.params.id);
        if(isNaN(professorId)){
            return res.sendStatus(400);
        }
        const tests = await testsService.getTestsByProfessor(professorId);
        if(tests == null){
            res.status(404);
            return res.send([]);
        }
        res.status(200);
        return res.send(tests);

    } catch{
        return res.sendStatus(500);
    }
}

export async function getTestsBySubject(req: Request, res: Response){
    try{
        const subjectId: number = parseInt(req.params.id);
        if(isNaN(subjectId)){
            return res.sendStatus(400);
        }
        const tests = await testsService.getTestsBySubject(subjectId);
        if(tests == null){
            res.status(404);
            return res.send([]);
        }
        res.status(200);
        return res.send(tests);
    } catch{
        return res.sendStatus(500);
    }
}

export async function getTestsByProfessorByCategory(req: Request, res:Response){
    try{
        const professorId:number = parseInt(req.params.professorId);
        const categoryId:number = parseInt(req.params.categoryId);
        if(isNaN(professorId) || isNaN(categoryId)){
            return res.sendStatus(400);
        }
        const tests = await testsService.getTestsByProfessorByCategory(professorId, categoryId);
        if(tests == null){
            res.status(404);
            return res.send([]);
        }
        res.status(200);
        return res.send(tests);

    } catch{
        return res.sendStatus(500);
    }
}

export async function getTestsBySubjectByCategory(req: Request, res:Response){
    try{
        const subjectId:number = parseInt(req.params.subjectId);
        const categoryId:number = parseInt(req.params.categoryId);
        if(isNaN(subjectId) || isNaN(categoryId)){
            return res.sendStatus(400);
        }
        const tests = await testsService.getTestsBySubjectByCategory(subjectId, categoryId);
        if(tests == null){
            res.status(404);
            return res.send([]);
        }
        res.status(200);
        return res.send(tests);

    } catch{
        return res.sendStatus(500);
    }
}


export async function postTest(req: Request, res: Response){
    try{
        const isPosted = await testsService.postTest(req.body);
        if(!isPosted){
            return res.sendStatus(400);
        }
        return res.sendStatus(201);
        
    } catch{
        return res.sendStatus(500);
    }
}