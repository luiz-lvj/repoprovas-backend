import { getRepository } from "typeorm";
import Category from "../entities/Category";
import Period from "../entities/Period";
import Professor from "../entities/Professor";
import Subject from "../entities/Subject";
import Test from "../entities/Test";

interface TestByProfessor{
    tests: Test[],
    professor: Professor
}

interface TestBySubject{
    tests: Test[],
    subject: Subject
}

export async function getTests(): Promise<Test[]>{
    try{
        const tests = await getRepository(Test).find({
            select: ["id", "name", "link"],
            relations: ["category", "professor", "period", "subject"],
        });
        return tests;
    } catch{
        return [];
    }
}

export async function getTestsByProfessor(professorId: number): Promise<TestByProfessor>{
    try{
        const professor = await getRepository(Professor).findOne({
            where: {
                id: professorId
            }
        });
        if(!professor){
            return null;
        }
        const tests = await getRepository(Test).find({
            select: ["id", "name", "link"],
            relations: ["category", "professor", "period", "subject"],
            where: {
                professor: professor
            }
        });
        return {
            professor,
            tests
        }
    }catch{
        return null;
    }
}

export async function getTestsBySubject(subjectId: number): Promise<TestBySubject>{
    try{
        const subject = await getRepository(Subject).findOne({
            where: {
                id: subjectId
            }
        });
        if(!subject){
            return null;
        }
        const tests = await getRepository(Test).find({
            select: ["id", "name", "link"],
            relations: ["category", "professor", "period", "subject"],
            where: {
                subject: subject
            }
        });
        return {
            subject,
            tests
        }
    }catch{
        return null;
    }
}

export async function postTest(test: any): Promise<boolean>{
    try{
        if(!isTestPost(test)){
            return false;
        }
        if(!isValidLink(test.link)){
            return false;
        }
        const professor:Professor = await getRepository(Professor).findOne({
            where: {id: test.professorId}
        });
        const subject:Subject = await getRepository(Subject).findOne({
            where: {id: test.subjectId}
        });
        const category:Category = await getRepository(Category).findOne({
            where: {id: test.categoryId}
        });
        const period:Period = await getRepository(Period).findOne({
            where: {id: test.periodId}
        });
        if(!professor || !subject || !category || !period){
            return false;
        }
        const testToSave = await getRepository(Test).create({
            name: test.name,
            link: test.link,
            professor: professor,
            subject: subject,
            category: category,
            period: period
        });
        await getRepository(Test).save(testToSave);
        return true;
    } catch{
        return false;
    }
}

function isValidLink(link: string): boolean{
    const regex1 = /^http:\/\//;
    const regex2 = /^https:\/\//;
    return regex1.test(link) || regex2.test(link);
}

function isTestPost(test: any): boolean{
    const bool1 = test;
    const bool2 = bool1 && test.id && typeof(test.id) == 'number';
    const bool3 = bool2 && test.name && typeof(test.name) == 'string';
    const bool4 = bool3 && test.link && typeof(test.link) == 'string';
    const bool5 = bool4 && test.periodId && typeof(test.periodId) == 'number';
    const bool6 = bool5 && test.professorId && typeof(test.professorId) == 'number';
    const bool7 = bool6 && test.subjectId && typeof(test.subjectId) == 'number';
    const ans = bool7 && test.categoryId && typeof(test.categoryId) == 'number';
    return ans;
}