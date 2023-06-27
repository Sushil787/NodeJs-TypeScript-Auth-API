import {Collection, Document} from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    age: number;
    sex: string;
}