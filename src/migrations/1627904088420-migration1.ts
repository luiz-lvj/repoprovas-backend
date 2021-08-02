import {MigrationInterface, QueryRunner} from "typeorm";

export class migration11627904088420 implements MigrationInterface {
    name = 'migration11627904088420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "periods" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "link" character varying NOT NULL, "categoryId" integer, "subjectId" integer, "professorId" integer, "periodId" integer, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors_subjects_subjects" ("professorsId" integer NOT NULL, "subjectsId" integer NOT NULL, CONSTRAINT "PK_f7a683c2962f5b05c570c1ee5d8" PRIMARY KEY ("professorsId", "subjectsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ab84af5b3c6dbc738858eafec0" ON "professors_subjects_subjects" ("professorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b5897f0bd8b57c0de84ce6132d" ON "professors_subjects_subjects" ("subjectsId") `);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_3557744b71edc782e1882c84776" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_efa5a6e1633a29cb951532ee424" FOREIGN KEY ("periodId") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professors_subjects_subjects" ADD CONSTRAINT "FK_ab84af5b3c6dbc738858eafec0f" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professors_subjects_subjects" ADD CONSTRAINT "FK_b5897f0bd8b57c0de84ce6132d2" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_subjects_subjects" DROP CONSTRAINT "FK_b5897f0bd8b57c0de84ce6132d2"`);
        await queryRunner.query(`ALTER TABLE "professors_subjects_subjects" DROP CONSTRAINT "FK_ab84af5b3c6dbc738858eafec0f"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_efa5a6e1633a29cb951532ee424"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_3557744b71edc782e1882c84776"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`DROP INDEX "IDX_b5897f0bd8b57c0de84ce6132d"`);
        await queryRunner.query(`DROP INDEX "IDX_ab84af5b3c6dbc738858eafec0"`);
        await queryRunner.query(`DROP TABLE "professors_subjects_subjects"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "periods"`);
    }

}
