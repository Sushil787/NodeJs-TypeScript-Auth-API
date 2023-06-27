import { Request, Response } from 'express';
import { IUser } from '../interface/user.interface';
import userModel from '../model/user.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default class Controller {


    public async signin(req: Request, res: Response): Promise<Response | Error> {
        const { username, password } = req.body;
        try {
          if (!username || !password) {
            return res.status(401).json({ message: "Incomplete content" });
          } else {
            const user: IUser = await userModel.findOne({ username });
            console.log(user);
            if (!user) {
              return res.status(404).json({ message: "No user found" });
            } else {
              const verify: boolean = await bcrypt.compare(password, user.password);
              if (verify) {
                const payload = { userId: user._id, username: user.username }; // Create a plain object payload
                const token: string = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "5h" });
                res.setHeader("Authorization", `Bearer ${token}`);
                return res.status(200).json({ message: "Authentication successful" });
              } else {
                return res.status(401).json({ message: "Username or password incorrect" });
              }
            }
          }
        } catch (error) {
          return res.status(500).json({ message: "Internal server error" });
        }
      }
      
    public async signup(req: Request, res: Response): Promise<Response | Error> {
        const user: IUser = req.body;
        console.log(user);
        try {
            if (!user.username || !user.email || !user.password || !user.sex || !user.age) {
                return res.status(401).json({ message: "incomplete data" });
            } else {
                const new_user = await userModel.findOne({ username: user.username });
                if (new_user) {
                    return res.status(409).json({ message: `user with ${user.username} already exists ` });
                } else {
                    const hashedPassword: String = await bcrypt.hash(user.password, 8);
                    await userModel.create({ ...user, password: hashedPassword });
                    return res.status(200).json({ message: "user created successfully" });
                }
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });

        }

    };

}