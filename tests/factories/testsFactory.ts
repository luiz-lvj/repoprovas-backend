import { getRepository } from "typeorm";
import Test from "../../src/entities/Test";
import { createProfessor } from "./professorsFactory";
import { createSubject } from "./subjectsFactory";

export async function createTest(): Promise<Test>{
    const professor = await createProfessor();
    const subject = await createSubject();
    const test = await getRepository(Test).create({
    });
    return test;
}