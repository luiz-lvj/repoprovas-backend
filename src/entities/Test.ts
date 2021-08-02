import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./Category";
import Period from "./Period";
import Professor from "./Professor";
import Subject from "./Subject";

@Entity('tests')
export default class Test {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    link: string;

    @ManyToOne(() => Category, category => category.tests)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @ManyToOne(() => Subject, subject => subject.tests)
    @JoinColumn({ name: 'subjectId' })
    subject: Subject;

    @ManyToOne(() =>Professor, professor => professor.tests)
    @JoinColumn({ name: 'professorId' })
    professor: Professor;

    @ManyToOne(() => Period, period => period)
    @JoinColumn({ name: 'periodId' })
    period: Period;
}