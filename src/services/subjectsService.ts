import { getRepository } from "typeorm";
import Subject from "../entities/Subject";
import Test from "../entities/Test";

interface SubjectTests{
    id: number, 
    name: string,
    tests: number
}

export async function getSubjects(): Promise<SubjectTests[]>{
    try{
        const subjects = await getRepository(Subject).find({
            select: ["id", "name"]
        });
        const subjectsWithTests: SubjectTests[] = await Promise.all(subjects.map(async (subject) => {
            let newSubject: SubjectTests = {... subject, tests: 0};
            newSubject['tests'] = await getRepository(Test).count({
                subject: subject
            });
            return newSubject;
        }));
        return subjectsWithTests;
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