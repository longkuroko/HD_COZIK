
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/account.entity";
import { hashPassword } from "../../util/helpers";

const register = async (
    req: Request<any, any, any, any>,
    res: Response
) => {
    try{

 
        const userData = req.body;
    
        const existEmail = await getRepository(Account)
            .createQueryBuilder('user')
            .where('user.username = :username', {username: userData.username})
            .getOne();
        
        if(existEmail){
            res.status(400).json({message:'Email has already exists !'});
        }
        else{
            const createUser = await getRepository(Account)
            .createQueryBuilder()
            .insert()
            .into(Account)
            .values({
                username: userData.username,
                password: await hashPassword(userData.password),
                role_id: userData.role_id
            })
            .returning("id")
            .execute();
            res.status(201).json({message:"created!", user: createUser});

        }
    }
    catch(err:any) {
        res.status(400).json({message: err.message});     
    }
}

export default register;