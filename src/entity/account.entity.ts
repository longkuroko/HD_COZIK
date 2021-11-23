import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
import { Staff } from "./staff.entity";
import { Users } from "./user.entity";

@Entity()
export class Account extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    user_id!:number;

    @Column()
    staff_id!:number;

    @Column()
    role_id!:number;

    @Column()
    username!:string;

    @Column()
    password!:string;

    @ManyToOne(() => Users, (user: Users) => user.account)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user!: Users;

    @ManyToOne(() => Staff, (staff: Staff) => staff.account)
    @JoinColumn({ name: "staff_id", referencedColumnName: "id" })
    staff!: Staff;

    @ManyToOne(() => Role, (role: Role) => role.account)
    @JoinColumn({ name: "role_id", referencedColumnName: "id" })
    role!: Role;


}