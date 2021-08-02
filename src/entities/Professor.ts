import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Subject from "./Subject";
import Test from "./Test";

@Entity('professors')
export default class Professor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Test, test => test.professor)
    tests: Test[];

    @ManyToMany(() => Subject, subject => subject.professors)
    @JoinTable()
    subjects: Subject[];
}