import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";
import { Users } from "./user.entity";

@Entity()
export class Patient extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    user_id!:number;

    @Column()
    staff_id!:number;

    @Column()
    createdat!: Date;

    @Column()
    updatedat!: Date;

    @Column()
    description!:string;

    @ManyToOne(() => Users, (user: Users) => user.patient)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user!: Users;

    @ManyToOne(() => Staff, (staff: Staff) => staff.patient)
    @JoinColumn({ name: "staff_id", referencedColumnName: "id" })
    staff!: Staff;

}
    
