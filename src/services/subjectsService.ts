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

export async function getSubjectProfessors(subjectId: number): Promise<Object>{
    try{
        const subject = await getRepository(Subject).findOne({
            select: ["id", "name"],
            where: {
                id: subjectId
            },
            relations: ["professors"]
        });
        return subject;
    } catch{
        return {};
    }
}