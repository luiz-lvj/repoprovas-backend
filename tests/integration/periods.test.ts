import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createPeriod } from "../factories/periodsFactory";
import { clearDatabase } from "../utils/database";


beforeAll(async () => {
    await init();
});

beforeEach(async () =>{
    await clearDatabase();
});

afterAll(async () =>{
    await clearDatabase();
    await getConnection().close();
});

describe("GET /periods", () => {
    it("returns 200", async () => {
        const period = await createPeriod();

        const response = await supertest(app).get("/periods");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: period.name
                })
            ])
        );

        expect(response.status).toBe(200); 
    })
});