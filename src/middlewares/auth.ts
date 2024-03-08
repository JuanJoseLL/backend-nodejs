import {Request, Response, NextFunction} from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken"

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try{
        let token = req.headers.authorization;
        if(!token){
            res.status(401).json({message: "Not authorized"})

        }
        token = token!.replace("Bearer ", "")

        const decode = jwt.verify(token, process.env.JWT_SECRET || "secret");

        req.body.loggedUser = decode;
        req.params.id = (decode as any).user_id

        next()
    }catch(error){
        if (error instanceof TokenExpiredError)
            return res.status(401).json({message: "Not authorized", error})
        else 
            return res.status(401).json({message: "Token invalid", error})
    }
}

export default auth