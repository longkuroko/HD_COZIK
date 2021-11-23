import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../entity/account.entity";


export const checkRole =  async (req: Request, res: Response) => {
    try{
        if(!(req as any).user) return res.status(403).json({message : "Unauthorized"});
        const  { userId } = (req as any).user;

        const findUser = await getRepository(Account)
            .createQueryBuilder()
            .where('id =:userId', {userId: userId})
            .getOne();
        
        if(findUser.role_id === 1){
            return 1;
        }else if(findUser.role_id === 2){
            return 2;
        }else if(findUser.role_id === 3){
            return 3;
        }

    }catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}