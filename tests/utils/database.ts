import { getRepository } from "typeorm";
import Professor from "../../src/entities/Professor";
import Subject from "../../src/entities/Subject";



export async function clearDatabase () {
  await getRepository(Professor).delete({});
  await getRepository(Subject).delete({});
}
