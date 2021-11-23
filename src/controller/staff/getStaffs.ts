import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Staff } from "../../entity/staff.entity";
import { Users } from "../../entity/user.entity";


export const getStaffs =  async (req: Request, res: Response) => {
    try{ 
        const page = +req?.query?.page || 1;
        const page_size = +req?.query?.page_size || "";
        if(page_size == ""){
                const [data, total] = await getRepository(Staff)
                .createQueryBuilder("ca")
                .getManyAndCount();
            return res.status(200).json({ total, data });
        }else{
            const [data, total] = await getRepository(Staff)
            .createQueryBuilder("ca")
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