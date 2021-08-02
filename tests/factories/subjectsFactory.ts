import { getRepository } from "typeorm";
import Subject from "../../src/entities/Subject";
import Professor from "../../src/entities/Professor";
import { createProfessor } from "./professorsFactory";


export async function createSubject(): Promise<Subject>{
    const subject = await getRepository(Subject).create({
        name: "Subject test"
    });

    await getRepository(Subject).save(subject);
    return subject;
}

export async function createSubjectWithProfessors(){
    const professor1:Professor = await createProfessor();
    const professor2:Professor = await createProfessor();
    const subject = await getRepository(Subject).create({
        name: "Subject test", 
        professors: [professor1, professor2]
    });
    await getRepository(Subject).save(subject);
    return subject;
}