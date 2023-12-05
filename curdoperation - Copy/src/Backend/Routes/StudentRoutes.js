import express from "express";
import { students } from '../Model/studentmodels.js';

const studentrouter = express.Router()

//post the data in batabase

studentrouter.post('/',async(req,res)=>{
    try{
        if(!req.body.Name || !req.body.StudentId || !req.body.PhoneNumber ||!req.body.Mail){
            return res.status(400).send("please fill the require data")
        }
       const requestedData = {
        Name:req.body.Name,
        StudentId:req.body.StudentId,
        PhoneNumber:req.body.PhoneNumber,
        Mail:req.body.Mail
       } 
       const student = await students.create(requestedData)
        return res.status(200).send("done")
    }catch(err){
        console.log(err.message)
         res.status(500).send("please fill the require data")
    }
    
})

//get the data using id

studentrouter.get('/:id',async(req,res)=>{
    console.log(req)
    try{
        const {id}  =req.params
        const student = await students.findById(id)
        if(!student){
        return res.status(400).send('id is invalid')
        }
        res.status(200).json(student)
    }catch(err){
         res.status(500).send('error 404')
    }
})

//get all data from the database

studentrouter.get('/',async(req,res)=>{
    const student = await students.find()
    res.status(200).json(student)
 })

 //update the data in database by id

 studentrouter.put('/:id',async(req,res)=>{
    try{
        if(!req.body.Name || !req.body.StudentId || !req.body.PhoneNumber ||!req.body.Mail){
            return res.status(400).send("please fill the require data")
        }
        const {id}  =req.params
       const requestedData = {
        Name:req.body.Name,
        StudentId:req.body.StudentId,
        PhoneNumber:req.body.PhoneNumber,
        Mail:req.body.Mail
       } 
       const student = await students.findByIdAndUpdate(id,requestedData)
       if(!student){
        return res.status(404).send({message:'value incorrect'})
        }
        return res.status(200).send("done")
    }catch(err){
        console.log(err.message)
        res.status(500).send("please fill the require data")
    }
    
})

//delete using id

studentrouter.delete('/:id',async(req,res)=>{
    try{
        const {id}  =req.params
        const student = await students.findByIdAndDelete(id)
        if(!student){
        return res.status(400).send('id is invalid')
        }
        return res.status(200).json("delete")
    }catch(err){
         res.status(500).send('error 404')
    }
})


export default studentrouter;