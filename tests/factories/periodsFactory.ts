import { getRepository } from "typeorm";
import Period from "../../src/entities/Period";

export async function createPeriod(): Promise<Period>{
    const period = await getRepository(Period).create({
        name: "Period test"
    });
    await getRepository(Period).save(period);
    return period;
}