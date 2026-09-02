import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    sizes:{
        type:Array,
        required:true
    },
    bestseller:{
        type:Boolean
    },
    date:{
        type:Number,
        required:true
    }
})


//If model not exists than it will make it, else it will take it from .models.product

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel