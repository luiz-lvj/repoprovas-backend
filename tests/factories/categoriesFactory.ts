import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";

export async function createCategory(): Promise<Category>{
    const category = await getRepository(Category).create({
        name: "category test"
    });
    await getRepository(Category).save(category);
    return category;
}