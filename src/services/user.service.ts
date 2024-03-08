import UserModel, {UserInput, UserDocument} from '../models/user.models';

class UserService {
  public async createUser(user: UserInput): Promise<UserDocument> {
    try{

        const newUser = await UserModel.create(user);
        
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
   
 


}

export default new UserService();
