import { Request, Response } from 'express';
import { IUser } from '../interface/user.interface';
import userModel from '../model/user.model';
import bcrypt from "bcrypt";
export default class Controller {


    public async signin(req: Request, res: Response): Promise<Response | Error> {
        const { username, password } = req.body;
        try {
            if (!username || !password) {
                return res.status(401).json({ message: "incomplete content" });
            } else {
                const user = await userModel.findOne({ username });

            }

        }
        catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

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