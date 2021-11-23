import { USER_SECRET } from "../util/constants";
import * as jwt from 'jsonwebtoken';


const auth = async (req: any, res: any, next: any) => {
    try{
        let token = req.headers['authorization'] || req.query.token;
        token = token.split(' ')[1];
        if (!token) {
          return res.status(401).send({ code: 401, message: 'Unauthorized' });
        }
        const user = jwt.verify(token, USER_SECRET);
        console.log(`decode token`, user)
        req.user = user;
        return next();
      } catch (err) {
        return res.status(401).send({ code: 401, message: 'Unauthorized' });
      }
};

export default auth;