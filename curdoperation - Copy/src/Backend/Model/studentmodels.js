import mongoose from 'mongoose';

const studentschema = mongoose.Schema(
    {
        Name:{
            type:String,
            require:true
        },
        StudentId:{
            type:String,
            require:true
        },
        PhoneNumber:{
            type:Number,
            require:true
        },
        Mail:{
            type:String,
            require:true
        }, 
    },
        {
            versionKey: false
    }
)

export  const students = mongoose.model('student',studentschema)