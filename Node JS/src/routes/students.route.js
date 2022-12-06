const express = require('express');
const data = require('../sample.json')
const studentsRoute = express.Router();

studentsRoute.get("/",function(req,res){
    res.status(200).send(data)
})
studentsRoute.post("/add",function(req,res){
    res.status(200).send("Okay")
})
module.exports = studentsRoute;