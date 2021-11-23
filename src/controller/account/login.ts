import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/account.entity";
import { comparePassword, generatorToken } from "../../util/helpers";


const login = async (req: Request, res: Response) => {

    try{

        const {username, password} = req.body;

        const user = await getRepository(Account).findOne({username});
        
        if(!user){
            res.status(404).json({message: "NOT FOUND"});
        }
        const matchPassword = await comparePassword(
            String(user?.password),
            password
        );

        if(matchPassword){
            const token = await generatorToken(user);
            res.status(200).json({token: token});

        }
        else{
            res.status(400).json({message: "wrong password!"});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    } 
}
export  default login;

