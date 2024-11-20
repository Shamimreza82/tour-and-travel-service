import { Schema } from "mongoose";


const UserSchema = new Schema({
    name: {type: String, require: true}, 
    email: {type: String, require: true}, 
    age: {type: Number, require: true}
    
})