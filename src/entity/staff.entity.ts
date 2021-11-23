import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Patient } from "./patient.entity";


@Entity()
export class Staff extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    cccd!:string;

    @Column()
    name!:string;
    
    @Column()
    id_doctor!:string;
 
    @Column()
    address!:string;

    @Column()
    phone!:string;

    @OneToMany(() => Account, (account: Account) => account.staff)
    @JoinColumn({ name: "id", referencedColumnName: "staff_id" })
    account!: Account[];

    @OneToMany(() => Patient, (patient: Patient) => patient.staff)
    @JoinColumn({ name: "id", referencedColumnName: "staff_id" })
    patient!: Patient[];

}