import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Patient } from "../../entity/patient.entity";
import { Staff } from "../../entity/staff.entity";

export const createPatient = async (req: Request, res: Response) => {
    try{
        const data = req.body;

        const staff = await getRepository(Patient)
            .createQueryBuilder()
            .insert()
            .into(Patient)
            .values(data)
            .execute();

        res.status(201).json({message:"success!"});
        
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}