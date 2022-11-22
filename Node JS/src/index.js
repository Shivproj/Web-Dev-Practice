const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const students = require("./sample2.json")



const app = express();
app.get("/",(req,res)=>{
    res.status(200).send("Hey")});
app.get("/students",(req,res)=>{   
            

    
    res.status(200).send(students)
    

})    
//to creeate server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("listening on port number " + PORT)
})
