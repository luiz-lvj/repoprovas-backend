import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";
import Period from "../../src/entities/Period";
import Professor from "../../src/entities/Professor";
import Subject from "../../src/entities/Subject";
import Test from "../../src/entities/Test";



export async function clearDatabase () {
  await getRepository(Professor).delete({});
  await getRepository(Subject).delete({});
  await getRepository(Category).delete({});
  await getRepository(Period).delete({});
  await getRepository(Test).delete({});
}
