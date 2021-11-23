import { Request, Response } from "express";
import { createQueryBuilder, getRepository } from "typeorm";
import { Users } from "../../entity/user.entity";
import { checkRole } from "../../middleware/role.middleware";


export const updateUser = async (req: Request, res: Response) => {
    try{ 
        const id = req.params.id; 
        const data = req.body;
        const check = await checkRole(req, res);
        if(check === 1){
            const update = await createQueryBuilder()
            .update(Users)
            .set(data)
            .where("id =:id", {id: id})
            .execute();
        res.status(200).json({message: "updated successfully!"});
        }else return res.status(403).json({message:"FORBIDEN"});

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
    
}