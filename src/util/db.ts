
import { ConnectionOptions } from "typeorm";
import { Account } from "../entity/account.entity";
import { Patient } from "../entity/patient.entity";
import { Role } from "../entity/role.entity";
import { Staff } from "../entity/staff.entity";
import { Users } from "../entity/user.entity";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./constants";

export const dbConfig: ConnectionOptions = {
    type: "postgres",
    host: DB_HOST,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    port: Number(DB_PORT) || 5432,
    ssl: { rejectUnauthorized: false },
    synchronize: false,
    entities: [Users, Role, Patient, Staff, Account],
    migrations: ['src/migration/*.ts'],
    cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
    }
}