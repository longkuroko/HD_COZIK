import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Staff } from "../../entity/staff.entity";

export const createStaff = async (req: Request, res: Response) => {
    try{
        const data = req.body;

        const staff = await getRepository(Staff)
            .createQueryBuilder()
            .insert()
            .into(Staff)
            .values(data)
            .execute();

        res.status(201).json({message:"success!"});
        
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}