import { getRepository } from "typeorm";
import Period from "../entities/Period";

export async function getPeriods(): Promise<Period[]>{
    try{
        const periods = await getRepository(Period).find({
            select: ["id", "name"]
        });
        return periods;
    } catch{
        return [];
    }
}