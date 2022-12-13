const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const studentsRoute = require("./src/routes/students.route")

app.use(cors({origin:true}));
app.use(bodyParser.json());
app.use("/students",studentsRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log("app is listening on " + PORT)})
