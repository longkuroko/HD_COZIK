import {Request,  Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/account.entity";


const me = async (req: any, res:Response) => {
    try{
        
   
        const userId = req?.user?.userId;
        if (!userId) return res.status(401).json({ message: "unauthorized!" });
       
        const data = await getRepository(Account)
            .createQueryBuilder("user")
            .where("user.id =:userId")
            .setParameters({userId: userId})
            .getOne();
            
        if(data){
            res.status(200).json({user: data});
        }
        else{
            res.status(404).json({message: "NOT FOUND"});
        }

    }
    catch(err){
        console.error(err);
        res.status(400).json({message: err.message});
    }
}

export default me;