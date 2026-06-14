import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: 50
    },
    email:{
        type: String,
        required: true,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    } 
});

const adminModel = model('admins', adminSchema);

export default adminModel;