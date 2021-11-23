import { Request, Response } from "express";
import { createQueryBuilder, getRepository } from "typeorm";
import { Patient } from "../../entity/patient.entity";
import { Staff } from "../../entity/staff.entity";
import { Users } from "../../entity/user.entity";


export const updatePatient = async (req: any, res: Response) => {
    try{ 

        const userId = req?.user?.userId;
        if (!userId) return res.status(401).json({ message: "unauthorized!" });
        const id = req.params.id; 
        const data = req.body;

        const findPatient = await getRepository(Patient).findOne({ id: id});

        const update = await createQueryBuilder()
            .update(Patient)
            .set(data)
            .where("id =:id", {id: id})
            .execute();
        
        await createQueryBuilder()
            .update(Users)
            .set({
                status: data.status
            })
            .where("id =:userId", {id: findPatient.user_id})
            .execute();
        res.status(200).json({message: "updated successfully!"});
    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
    
}