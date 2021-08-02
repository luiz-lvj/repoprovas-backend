import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createSubject } from "../factories/subjectsFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
    await init();
    await clearDatabase();
});

beforeEach(async () =>{
    await clearDatabase();
});

afterAll(async () =>{
    await clearDatabase();
    await getConnection().close();
});
describe("GET /subjects", () =>{
    it("returns status 200", async() =>{
        const subject = await createSubject();

        const response = await supertest(app).get("/subjects");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: subject.name
                })
            ])
        );
        expect(response.status).toBe(200);
    });

});