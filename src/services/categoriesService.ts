import { getRepository } from "typeorm";
import Category from "../entities/Category";

export async function getCategories(): Promise<Category[]>{
    try{
        const categories = await getRepository(Category).find({
            select: ["id", "name"]
        });
        return categories;
    } catch{
        return [];
    }
}