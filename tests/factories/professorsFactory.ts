import { getRepository } from "typeorm";
import Professor from "../../src/entities/Professor";
import Subject from "../../src/entities/Subject";
import { createSubject } from "./subjectsFactory";

export async function createProfessor(){
    const professor = await getRepository(Professor).create({
        name: "Professor test"
    });

    await getRepository(Professor).save(professor);
    return professor;
}

export async function createProfessorWithSubjects(){
    const subject1:Subject = await createSubject();
    const subject2:Subject = await createSubject();
    const professor = await getRepository(Professor).create({
        name: "Professor test", 
        subjects: [subject1, subject2]
    });
    await getRepository(Professor).save(professor);
    return professor;
}