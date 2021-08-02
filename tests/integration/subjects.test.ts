import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createSubject, createSubjectWithProfessors } from "../factories/subjectsFactory";
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

describe("GET /subjects/:id/professors", () => {
    it("returns 200 with subjects", async () =>{
        const subject = await createSubjectWithProfessors();
        const response = await supertest(app).get(`/subjects/${subject.id}/professors`);
        expect(response.body).toMatchObject({
            id: subject.id,
            name: subject.name,
            professors: subject.professors
        });
        expect(response.status).toBe(200);
    });
    it("returns 404 for unknown professor", async () =>{
        const response = await supertest(app).get(`/subjects/1/professors`);
        expect(response.status).toBe(404);
    });
    it("returns 400 for invalid url", async () =>{
        const response = await supertest(app).get(`/subjects/anything/professors`);
        expect(response.status).toBe(400);
    })
});