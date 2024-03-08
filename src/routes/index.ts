import { Express} from 'express';

import userController from "../controllers/user.controller"
import auth from "../middlewares/auth"
import userSchema from "../schemas/user.schemas" 

import validateSchema from "../middlewares/validateSchema"


const routes = ( app: Express ) => {
    app.get("/users", userController.getUsers)
    app.post('/login', userController.login)
    app.post("/users", validateSchema(userSchema), userController.createUser)
};

export default routes;