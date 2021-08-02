import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Test from "./Test";

@Entity('periods')
export default class Period {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Test, test => test.period)
    tests: Test[]
}