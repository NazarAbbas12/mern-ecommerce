import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{}
    },
},{minimize:false}) // default:{} empty object is neglected by mongoose,so minimize will help in putting empty object

const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel