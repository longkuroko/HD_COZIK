import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";

@Entity()
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!:string;

    @OneToMany(() =>Account, (account: Account) => account.role)
    @JoinColumn({ name: "id", referencedColumnName: "role_id"})
    account!:Account[];
}