import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Staff } from "../../entity/staff.entity";
import { checkRole } from "../../middleware/role.middleware";

export const createStaff = async (req: Request, res: Response) => {
    try{

        const check = await checkRole(req, res);
        if(check === 1){
            const data = req.body;
            const staff = await getRepository(Staff)
                .createQueryBuilder()
                .insert()
                .into(Staff)
                .values(data)
                .execute();
    
            res.status(201).json({message:"success!"});
        }else return res.status(403).json({message:"FORBIDEN"});   
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}