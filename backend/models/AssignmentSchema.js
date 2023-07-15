import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const AssignmentSchema=new mongoose.Schema({
    text:{
        type:String,
         required:true,
    },
    user:{
        type:String,
         required:true,
    },
    deadline:{
        type:String,
    },
    pic:{
        type:String,
       
    }
    },
    {timestamps:true}
);

const AssModel=mongoose.model("Assignment",AssignmentSchema);
export default AssModel;