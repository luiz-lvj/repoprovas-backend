import { getRepository } from "typeorm";
import Professor from "../../src/entities/Professor";

export async function createProfessor(){
    const professor = await getRepository(Professor).create({
        name: "Professor test"
    });

    await getRepository(Professor).save(professor);
    return professor;
}