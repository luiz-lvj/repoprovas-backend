import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createProfessor } from "../factories/professorsFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
    await init();
});

beforeEach(async () =>{
    await clearDatabase();
});

afterAll(async () =>{
    await getConnection().close();
});

describe("GET /professors", () =>{
    it("returns status 200", async() =>{
        const professor = await createProfessor();

        const response = await supertest(app).get("/professors");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: professor.name
                })
            ])
        );

        expect(response.status).toBe(200);
    });

})