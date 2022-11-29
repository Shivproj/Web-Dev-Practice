const express = require('express');
const data = require('../sample.json')
const studentsRoute = express.Router();

studentsRoute.get("/",function(req,res){
    res.status(200).send(data)
})
module.exports = studentsRoute;