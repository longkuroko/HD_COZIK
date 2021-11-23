import { Request, Response } from "express";
import { createQueryBuilder, getRepository } from "typeorm";
import { Patient } from "../../entity/patient.entity";
import { Staff } from "../../entity/staff.entity";
import { Users } from "../../entity/user.entity";


export const updatePatient = async (req: Request, res: Response) => {
    try{ 
        const id = req.params.id; 
        const data = req.body;

        const update = await createQueryBuilder()
            .update(Patient)
            .set(data)
            .where("id =:id", {id: id})
            .execute();
        res.status(200).json({message: "updated successfully!"});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
    
}