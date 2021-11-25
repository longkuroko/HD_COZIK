import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { displayPartsToString } from "typescript";
import { Patient } from "../../entity/patient.entity";
import { Staff } from "../../entity/staff.entity";
import { checkRole } from "../../middleware/role.middleware";

export const createPatient = async (req: any, res: Response) => {
    try{

        const check = await checkRole(req, res);
        if(check === 1){
            const data = req.body;
            const patient = await getRepository(Patient)
            .createQueryBuilder()
            .insert()
            .into(Patient)
            .values({
                user_id: data.user_id,
                staff_id: data.staff_id,
                description: data.description,
                createdat : new Date(),
                updatedat: new Date(),
            })
            .execute();

        res.status(201).json({message:"success!"});  
        }
        else return res.status(403).json({message:"FORBIDEN"});   
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}