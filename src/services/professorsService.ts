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