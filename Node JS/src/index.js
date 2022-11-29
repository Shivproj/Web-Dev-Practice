const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data1 = require("./routes/students.route")
const app = express();
app.use(cors())
app.get("/",function(req,res) {
  res.status(200).send("Hey there!")
})
app.use("/data",data1)








const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{})