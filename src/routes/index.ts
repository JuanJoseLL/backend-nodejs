import { Express} from 'express';

import userController from "../controllers/user.controller"
import auth from "../middlewares/auth"
import userSchema from "../schemas/user.schemas" 

const routes = ( app: Express ) => {
    app.get("/users", auth, userController.getUsers)
    app.post("/users", userController.createUser)
    app.post('/login', userController.login)
};

export default routes;