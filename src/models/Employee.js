<<<<<<< HEAD
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
=======
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
>>>>>>> 9aa4fe9af5039d6bc34d7790545c9f20d25d8d94
