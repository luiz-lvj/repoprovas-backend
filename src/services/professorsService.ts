import { getRepository } from "typeorm";
import Professor from "../entities/Professor";
import Test from "../entities/Test";

interface ProfessorTests{
    id: number,
    name: string,
    tests: number
}

export async function getProfessors(): Promise<ProfessorTests[]> {
    try{
        const professors = await getRepository(Professor).find({
            select: ["id", "name"]
        });
        const professorsWithTests: ProfessorTests[] = await Promise.all(professors.map(async (professor) => {
            let newProf: ProfessorTests = {...professor, tests: 0}
            newProf['tests'] = await getRepository(Test).count({
                professor: professor
            });
            return newProf;
        }));
        return professorsWithTests;
    } catch{
        return [];
    }
}

export async function getProfessorSubjects(professorId: number): Promise<Object>{
    try{
        const professor = await getRepository(Professor).findOne({
            select: ["id", "name"],
            where: {
                id: professorId
            },
            relations: ["subjects"]
        });
        return professor;
    } catch{
        return {};
    }
}