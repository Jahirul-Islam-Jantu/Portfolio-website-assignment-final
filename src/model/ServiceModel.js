import mongoose from "mongoose";

const TeamMemberSchema = mongoose.Schema({
    title: {type:String},
    stack: {type:String},
    time : {type:String},
    img:{type:String},
}, {timestamps: true, versionKey: false})

const ServiceModel = mongoose.model("Service", TeamMemberSchema)
export default ServiceModel