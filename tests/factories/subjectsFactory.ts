import { getRepository } from "typeorm";
import Subject from "../../src/entities/Subject";


export async function createSubject(): Promise<Subject>{
    const subject = await getRepository(Subject).create({
        name: "Subject test"
    });

    await getRepository(Subject).save(subject);
    return subject;
}