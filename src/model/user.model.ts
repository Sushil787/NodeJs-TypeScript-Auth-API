import mongoose, {Schema,Document} from "mongoose"
import {IUser} from 'interface/user.interface'

const UserSchema:Schema = new Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email:  {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    sex:  {
        type:String,
        required:true
    },
});

export default mongoose.model<IUser>('User', UserSchema);