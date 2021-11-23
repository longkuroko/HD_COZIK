import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/account.entity";
import { Users } from "../../entity/user.entity";
import { checkRole } from "../../middleware/role.middleware";


export const getUsers =  async (req: any, res: Response) => {
    try{
        
        const userId = req?.user?.userId;
        if (!userId) return res.status(401).json({ message: "unauthorized!" });

        const page = +req?.query?.page || 1;
        const page_size = +req?.query?.page_size || "";
        
        const findId = await getRepository(Account).findOne({ id: userId});
        if(findId.role_id === 1){
                if(page_size == ""){
                    const [data, total] = await getRepository(Users)
                    .createQueryBuilder("ca")
                    .getManyAndCount();
                return res.status(200).json({ total, data });
            }else{
                    const [data, total] = await getRepository(Users)
                    .createQueryBuilder("ca")
                    .take(page_size)
                    .skip((page - 1) * page_size)
                    .getManyAndCount();
            return res.status(200).json({ total, data });
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
}