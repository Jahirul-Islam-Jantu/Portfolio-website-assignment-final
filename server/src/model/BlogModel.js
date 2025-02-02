import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    productName: {type:String},
    productDes: {type:String},
    productPrice: {type:String},
    img:{type:String},
}, {timestamps: true, versionKey: false})

const BlogModel = mongoose.model("products", ProductSchema)
export default BlogModel