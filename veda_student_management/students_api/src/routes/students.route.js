const express = require('express');
const studentsRoute = express.Router();
const {getStudents,createStudent} = require('../controllers/students.controller')

studentsRoute.get("/",async(req, res)=>{
     data = await  getStudents();
     res.status(200).send(data);


})
studentsRoute.post("/",async(req, res)=>{
    await createStudent(req.body);
    res.status(200).send("Inserted");


})



module.exports = studentsRoute;