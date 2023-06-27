import Controller from '../controller/user.controller';
import {Express, Request, Response,Router} from 'express'
export const userRouter = Router();
const userController:Controller = new Controller();
userRouter.post("/signin",userController.signin);
userRouter.post("/signup", userController.signup);




