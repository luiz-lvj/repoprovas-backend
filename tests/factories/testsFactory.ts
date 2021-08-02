import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";
import Professor from "../../src/entities/Professor";
import Subject from "../../src/entities/Subject";
import Test from "../../src/entities/Test";
import { createCategory } from "./categoriesFactory";
import { createPeriod } from "./periodsFactory";
import { createProfessor } from "./professorsFactory";
import { createSubject } from "./subjectsFactory";

export async function createTest(): Promise<Test>{
    const professor = await createProfessor();
    const subject = await createSubject();
    const category = await createCategory();
    const period = await createPeriod();
    const test = await getRepository(Test).create({
        name: "Test",
        link: "https://anything.com",
        professor: professor,
        subject: subject,
        category: category,
        period: period
    });
    await getRepository(Test).save(test);
    return test;
}

export async function createTestWithProfessor(professor: Professor): Promise<Test>{
    const subject = await createSubject();
    const category = await createCategory();
    const period = await createPeriod();
    const test = await getRepository(Test).create({
        name: "Test",
        link: "https://anything.com",
        professor: professor,
        subject: subject,
        category: category,
        period: period
    });
    await getRepository(Test).save(test);
    return test;
}
export async function createTestWithSubject(subject: Subject): Promise<Test>{
    const professor = await createProfessor();
    const category = await createCategory();
    const period = await createPeriod();
    const test = await getRepository(Test).create({
        name: "Test",
        link: "https://anything.com",
        professor: professor,
        subject: subject,
        category: category,
        period: period
    });
    await getRepository(Test).save(test);
    return test;
}

export async function createTestWithProfessorWithCategory(professor: Professor, category: Category): Promise<Test>{
    const subject = await createSubject();
    const period = await createPeriod();
    const test = await getRepository(Test).create({
        name: "Test",
        link: "https://anything.com",
        professor: professor,
        subject: subject,
        category: category,
        period: period
    });
    await getRepository(Test).save(test);
    return test;
}

export async function createTestWithSubjectWithCategory(subject: Subject, category: Category): Promise<Test>{
    const professor = await createProfessor()
    const period = await createPeriod();
    const test = await getRepository(Test).create({
        name: "Test",
        link: "https://anything.com",
        professor: professor,
        subject: subject,
        category: category,
        period: period
    });
    await getRepository(Test).save(test);
    return test;
}