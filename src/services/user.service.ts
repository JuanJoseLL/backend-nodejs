import UserModel, {UserInput, UserDocument} from '../models/user.models';
import jwt from "jsonwebtoken"
class UserService {
  public async createUser(user: UserInput): Promise<UserDocument> {
    try{
        console.log("Entra a crear usuario")
        const newUser = await UserModel.create(user);
        console.log("service")
        return newUser;
    }catch(err){
      throw err;
    }
  }

  public async findAll(): Promise<UserDocument[]>{
    try{

      const users = await UserModel.find();
      return users;

    }catch(err){
        throw  err;
    }
  }

  public async findByEmail(email: string): Promise<UserDocument | null>{
    try{
      console.log("LLEga al service")
      const user = await UserModel.findOne({email: email})
      console.log("Sale del service")
      return user
    }catch(error){
      throw error
    }
  }

  public generateToken(user: UserDocument): string{
    try{
      return jwt.sign({user_id: user.id, email: user.email, role: user.role}, process.env.JWT_SECRET || "secret", {expiresIn: "10h"})
    }catch(error){
          throw error
    }
  }
   
 


}

export default new UserService();
