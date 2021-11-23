import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Patient } from "./patient.entity";


@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    cccd!:string;

    @Column()
    name!:string;

    @Column()
    date_of_birth!:Date;

    @Column()
    address!:string;

    @Column()
    phone!:string;

    @Column()
    gender!:boolean;

    @Column()
    status!:Boolean;

    @OneToMany(() => Account, (account: Account) => account.user)
    @JoinColumn({ name: "id", referencedColumnName: "user_id" })
    account!: Account[];

    @OneToMany(() => Patient, (patient: Patient) => patient.user)
    @JoinColumn({ name: "id", referencedColumnName: "user_id" })
    patient!: Account[];
  

}