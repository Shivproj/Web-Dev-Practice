const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.get("/",(req,res)=>{
    res.status(200).send("Hey")});
app.get("/students",(req,res)=>{
    const students=[{
        
            "Name": "Test",
            "Mobile": 12345678,
            "Boolean": true,
            "Pets": [
              "Dog",
              "cat"
            ],
            "Address": {
              "Permanent address": "USA",
              "current Address": "AU"
            }
          

    }];
    res.status(200).send(students)
    

})    
//to creeate server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("listening on port number " + PORT)
})
