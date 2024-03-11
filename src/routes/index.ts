import { Express } from 'express';
import userController from "../controllers/user.controller";
import eventController from "../controllers/event.controller"; 
import auth from "../middlewares/auth";
import userSchema from "../schemas/user.schemas";



import validateSchema from "../middlewares/validateSchema";
import { authorize } from '../middlewares/auth';

const routes = (app: Express) => {
   

    app.get("/", userController.getLandingPage);
    app.get("/users", auth, authorize(["admin"]), userController.getUsers);
    app.post('/login', userController.login);
    app.post("/users", auth, validateSchema(userSchema), userController.createUser);
    app.get("/events", auth, eventController.getEvents);
    app.post("/events", auth, eventController.createEvent);
    app.get("/events", auth, eventController.getEvents);
};

export default routes;
