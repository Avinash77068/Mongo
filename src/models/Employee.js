import mongoose from "mongoose";


const employee =new  mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
})


const Employee = mongoose.model("employee", employee)

export default Employee
