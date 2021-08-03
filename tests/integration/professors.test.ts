import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createProfessor, createProfessorWithSubjects } from "../factories/professorsFactory";
import { createTestWithProfessor } from "../factories/testsFactory";
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

describe("GET /professors", () =>{
    it("returns status 200", async() =>{
        const professor = await createProfessor();

        const response = await supertest(app).get("/professors");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: professor.name,
                    tests: 0
                })
            ])
        );

        expect(response.status).toBe(200);
    });
    it("returns 200 with number of tests", async () => {
        const professor = await createProfessor();

        await createTestWithProfessor(professor);
        const response = await supertest(app).get("/professors");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: professor.name,
                    tests: 1
                })
            ])
        );

        expect(response.status).toBe(200);
    });

});

describe("GET /professors/:id/subjects", () => {
    it("returns 200 with subjects", async () =>{
        const professor = await createProfessorWithSubjects();
        const response = await supertest(app).get(`/professors/${professor.id}/subjects`);
        expect(response.body).toMatchObject({
            id: professor.id,
            name: professor.name,
            subjects: professor.subjects
        });
        expect(response.status).toBe(200);
    });
    it("returns 404 for unknown professor", async () =>{
        const response = await supertest(app).get(`/professors/1/subjects`);
        expect(response.status).toBe(404);
    });
    it("returns 400 for invalid url", async () =>{
        const response = await supertest(app).get(`/professors/anything/subjects`);
        expect(response.status).toBe(400);
    })
});