import { getRepository } from "typeorm";
import Category from "../entities/Category";
import Period from "../entities/Period";
import Professor from "../entities/Professor";
import Subject from "../entities/Subject";
import Test from "../entities/Test";


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

export async function getTestsByProfessor(professorId: number): Promise<Test[]>{
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
        return tests;
    }catch{
        return null;
    }
}

export async function getTestsBySubject(subjectId: number): Promise<Test[]>{
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
        return tests;
    }catch{
        return null;
    }
}

export async function getTestsByProfessorByCategory(professorId: number, categoryId: number): Promise<Test[]>{
    try{
        const professor = await getRepository(Professor).findOne({
            where: {
                id: professorId
            }
        });
        const category = await getRepository(Category).findOne({
            where: {
                id: categoryId
            }
        });
        if(!professor || !category){
            return null;
        }
        const tests = await getRepository(Test).find({
            select: ["id", "name", "link"],
            relations: ["category", "professor", "period", "subject"],
            where: {
                professor: professor,
                category: category
            }
        });
        return tests;
    }catch{
        return null;
    }
}

export async function getTestsBySubjectByCategory(subjectId: number, categoryId: number): Promise<Test[]>{
    try{
        const subject = await getRepository(Subject).findOne({
            where: {
                id: subjectId
            }
        });
        const category = await getRepository(Category).findOne({
            where: {
                id: categoryId
            }
        });
        if(!subject || !category){
            return null;
        }
        const tests = await getRepository(Test).find({
            select: ["id", "name", "link"],
            relations: ["category", "professor", "period", "subject"],
            where: {
                subject: subject,
                category: category
            }
        });
        return tests;
    }catch{
        return null;
    }
}

export async function postTest(test: any): Promise<boolean>{
    try{
        if(!isTestPost(test)){
            console.log('aa');
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
        console.log(professor);
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
    } catch {
        return false;
    }
}

function isValidLink(link: string): boolean{
    const regex1 = /^http:\/\//;
    const regex2 = /^https:\/\//;
    return regex1.test(link) || regex2.test(link);
}

function isTestPost(test: any): boolean{
    
    if(!test.periodId)return false;
    if(typeof(test.periodId) !== 'number') return false;
    if(!test.professorId)return false;
    if(typeof(test.professorId) !== 'number') return false;
    if(!test.subjectId)return false;
    if(typeof(test.subjectId) !== 'number') return false;
    if(!test.categoryId)return false;
    if(typeof(test.categoryId) !== 'number') return false;
    if(!test.name) return false;
    if(typeof(test.name) !== 'string') return false;
    if(!test.link) return false;
    if(typeof(test.link) !== 'string') return false;
    
    return true;
}