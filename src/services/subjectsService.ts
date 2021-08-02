import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function getSubjects(): Promise<Subject[]>{
    try{
        const subjects = await getRepository(Subject).find({
            select: ["id", "name"]
        });
        return subjects;
    } catch{
        return [];
    }
}