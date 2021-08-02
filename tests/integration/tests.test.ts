import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import { createCategory } from "../factories/categoriesFactory";
import { createPeriod } from "../factories/periodsFactory";
import { createProfessor } from "../factories/professorsFactory";
import { createSubject } from "../factories/subjectsFactory";
import { createTest, createTestWithProfessor, createTestWithProfessorWithCategory, createTestWithSubject, createTestWithSubjectWithCategory } from "../factories/testsFactory";
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

describe("GET /tests", () => {
    it("returns 200", async () => {
        const test = await createTest();

        const response = await supertest(app).get("/tests");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: test.id,
                    name: test.name,
                    link: test.link,
                    professor: test.professor,
                    subject: test.subject,
                    period: test.period,
                    category: test.category
                })
            ])
        );

        expect(response.status).toBe(200);
    })
});

describe("GET /tests/professors/:id", () => {
    it("returns 200", async () => {
        const professor = await createProfessor();
        await createTestWithProfessor(professor);
        await createTestWithProfessor(professor);
        await createTest();
        const response = await supertest(app).get(`/tests/professors/${professor.id}`);
        expect(response.body.length).toBe(2);
        expect(response.status).toBe(200);
    });
});
describe("GET /tests/subjects/:id", () => {
    it("returns 200", async () => {
        const subject = await createSubject();
        await createTestWithSubject(subject);
        await createTestWithSubject(subject);
        await createTest();
        const response = await supertest(app).get(`/tests/subjects/${subject.id}`);
        expect(response.body.length).toBe(2);
        expect(response.status).toBe(200);
    });
});

describe("GET /tests/professors/:professorId/categories/:categoryId", () => {
    it("returns 200", async () =>{
        const professor = await createProfessor();
        const category = await createCategory();
        await createTestWithProfessorWithCategory(professor, category);
        await createTestWithProfessorWithCategory(professor, category);
        await createTest();
        const response = await supertest(app).get(`/tests/professors/${professor.id}/categories/${category.id}`);
        expect(response.body.length).toBe(2);
        expect(response.status).toBe(200);
    })

});

describe("GET /tests/subejcts/:subjectId/categories/:categoryId", () => {
    it("returns 200", async () =>{
        const subject = await createSubject();
        const category = await createCategory();
        await createTestWithSubjectWithCategory(subject, category);
        await createTestWithSubjectWithCategory(subject, category);
        await createTest();
        const response = await supertest(app).get(`/tests/subjects/${subject.id}/categories/${category.id}`);
        expect(response.body.length).toBe(2);
        expect(response.status).toBe(200);
    })

});

describe("POST /tests", () => {
    it("returns 201 for valid creation", async () =>{
        const professor = await createProfessor();
        const subject = await createSubject();
        const period = await createPeriod();
        const category = await createCategory();
        const body = {
            name: "Test",
            link: "https://anything.com",
            professorId: professor.id,
            subjectId: subject.id,
            periodId: period.id,
            categoryId: category.id
        }
        const response = await supertest(app).post("/tests").send(body);
        expect(response.status).toBe(201);
    });
    it("returns 400 for invalid body", async () => {
        const professor = await createProfessor();
        const subject = await createSubject();
        const period = await createPeriod();
        const body = {
            name: "Test",
            link: "https://anything.com",
            professorId: professor.id,
            subjectId: subject.id,
            periodId: period.id,
            categoryId: 1
        }
        const response = await supertest(app).post("/tests").send(body);
        expect(response.status).toBe(400);
    });
    it("returns 400 for invalid link", async () => {
        const professor = await createProfessor();
        const subject = await createSubject();
        const period = await createPeriod();
        const category = await createCategory();
        const body = {
            name: "Test",
            link: "anything",
            professorId: professor.id,
            subjectId: subject.id,
            periodId: period.id,
            categoryId: category.id
        }
        const response = await supertest(app).post("/tests").send(body);
        expect(response.status).toBe(400);
    });
});