
import * as bcrypt from 'bcrypt';
import dotenv =  require('dotenv');
import { USER_SECRET } from './constants';

const jwt = require("jsonwebtoken");
dotenv.config();
// export const getEnv = (key: string) => {
//     return process.env[key] || ''
// };
export const generatorToken = async (user: any) => {
    let token = await jwt.sign({userId: user.id}, USER_SECRET, {
        algorithm:'HS256',
        subject:`${user.id}`,
        expiresIn:'356d',
    });
    return token;
}

export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export async function comparePassword(
    hashedPassword: string,
    password2: string
  ) {
    return await bcrypt.compare(password2, hashedPassword);
};

