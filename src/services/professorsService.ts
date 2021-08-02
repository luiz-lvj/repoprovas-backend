import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function getProfessors(): Promise<Professor[]> {
    try{
        const professors = await getRepository(Professor).find({
            select: ["id", "name"]
        });
        return professors;
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