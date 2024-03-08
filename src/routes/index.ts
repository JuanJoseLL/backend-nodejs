import { Express} from 'express';

import userController from "../controllers/user.controller"

import userSchema from "../schemas/user.schemas" 

const routes = ( app: Express ) => {
    app.get("/users", userController.getUsers)
    app.post("/users", userController.createUser)

};

export default routes;