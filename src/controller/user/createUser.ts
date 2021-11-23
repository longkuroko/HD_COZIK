import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Users } from "../../entity/user.entity";

export const createUser = async (req: Request, res: Response) => {
    try{
        const data = req.body;

        const user = await getRepository(Users)
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values(data)
            .execute();

        res.status(201).json({message:"success!"});
        
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}