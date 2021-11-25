import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/account.entity";
import { Patient } from "../../entity/patient.entity";
import { checkRole } from "../../middleware/role.middleware";


export const getPatients =  async (req: any, res: Response) => {
    try{

        const userId = req?.user?.userId;
        if (!userId) return res.status(401).json({ message: "unauthorized!" });
        
        const page = +req?.query?.page || 1;
        const page_size = +req?.query?.page_size || "";
        // const check = await checkRole(req, res);
        const check = await getRepository(Account).findOne({id: userId});


        if(check.role_id === 1){
            
            if(page_size == ""){
                const [data, total] = await getRepository(Patient)
                    .createQueryBuilder("ca")
                    .getManyAndCount();
                return res.status(200).json({ total, data });
            }else{
                const [data, total] = await getRepository(Patient)
                    .createQueryBuilder("ca")
                    .take(page_size)
                    .skip((page - 1) * page_size)
                    .getManyAndCount();
                return res.status(200).json({ total, data });
                }
        }else if(check.role_id   === 2){
            if(page_size == ""){
                const [data, total] = await getRepository(Patient)
                    .createQueryBuilder("ca")
                    .where('ca.staff_id =:id', {id: check.staff_id})
                    .getManyAndCount();
                return res.status(200).json({ total, data });
            }else{
                const [data, total] = await getRepository(Patient)
                    .createQueryBuilder("ca")
                    .where('ca.staff_id =:id', {id: check.staff_id})
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