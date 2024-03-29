import {Request, Response, NextFunction} from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken"

// verificamos que el usuario tenga el token y asi
// lo autorizamos o no
const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;
        
        if(!token){
            res.status(401).json({message: "Not authorized"})
        } else {
          token = token.replace("Bearer ", "")

          const decode = jwt.verify(token, process.env.JWT_SECRET || "secret");

          req.body.loggedUser = decode;
          req.params.id = (decode as any).user_id

          next()
        }
    } catch(error) {
        if (error instanceof TokenExpiredError) {
          return res.status(401).json({message: "Not authorized", error})
        } else {
          return res.status(401).json({message: "Token invalid", error})
        }
    }
}

// verifica si el usuario tiene alguno de los roles que le pasamos
// por parámetro, así autoriza o no autoriza
export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      
      if (!roles.includes(req.body.loggedUser.role)) {
        return res.status(403).json({ message: "Forbidden" });
      } else {
        console.log(`Authorized. ${req.body.loggedUser.role} role`)
        next();
      }
    };
  };


export default auth