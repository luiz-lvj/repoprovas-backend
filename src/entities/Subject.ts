import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Professor from "./Professor";
import Test from "./Test";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Test, test => test.subject)
    tests: Test[];

    @ManyToMany(() => Professor, professor => professor.subjects)
    professors: Professor[];
}