import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/account.entity";
import { Patient } from "../../entity/patient.entity";


export const getAccounts =  async (req: Request, res: Response) => {
    try{ 
        const page = +req?.query?.page || 1;
        const page_size = +req?.query?.page_size || "";
        if(page_size == ""){
                const [data, total] = await getRepository(Account)
                .createQueryBuilder("ca")
                .leftJoinAndSelect("ca.role", 'role')
                .getManyAndCount();
            return res.status(200).json({ total, data });
        }else{
            const [data, total] = await getRepository(Account)
            .createQueryBuilder("ca")
            .leftJoinAndSelect('ca.role', 'role')
            .take(page_size)
            .skip((page - 1) * page_size)
            .getManyAndCount();
        return res.status(200).json({ total, data });
        }

    }
    catch(err){
        console.log(err);
        res.status(400).json({message: err.message})
    }
}