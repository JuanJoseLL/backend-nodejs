import { Response, Request } from 'express';
import userService from '../services/user.service';
import {UserDocument, UserInput} from '../models/user.models';
//import bcrypt from 'bcrypt';


class UserController {

  public async createUser(req: Request, res: Response) {
    try{
      //const UserExist: UserDocument = await userService.findUserByEmail(req.body.email);
      const user: UserInput = req.body;
      //user.password = await bcrypt.hash(user.password, 10);
      const newUser: UserDocument = await userService.createUser(user);
      res.status(201).json(newUser);
    }catch(err){
      res.status(500).json(err);
    }
  }

  public async getUsers(req: Request, res: Response){

    try{

      const users = await userService.findAll();

      res.json(users)
    }catch(err){
      res.status(500).json(err)
    }
  }

}

export default new UserController();