// import { getEnv } from "./helpers";
import * as env from 'dotenv';

env.config();
export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT;
export const USER_SECRET = process.env.USER_SECRET || 'long';


// export const DB_HOST = getEnv('DB_HOST');
// export const DB_NAME = getEnv('DB_NAME');
// export const DB_USER = getEnv('DB_USER');
// export const DB_PASSWORD = getEnv('DB_PASSWORD');
// export const DB_PORT = getEnv('DB_PORT');
// export const USER_SECRET = getEnv('USER_SECRET') || 'long';