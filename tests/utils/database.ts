import { getRepository } from "typeorm";
import Professor from "../../src/entities/Professor";



export async function clearDatabase () {
  await getRepository(Professor).delete({});
}
