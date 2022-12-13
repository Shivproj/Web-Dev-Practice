const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://demo:demo123@cluster0.vpoffdz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function getStudents() {
  await client.connect();
  const collection = client.db("veda").collection("students");
  //To get all data
  const students = await collection.find();  
  let _data = [];
  await students.forEach((student) => _data.push(student))  
  console.log(_data);
 
  return _data;
  //--------------------------------------

}
async function createStudent(obj) {
    await client.connect();
    const collection = client.db("veda").collection("students");
    await collection.insertOne(obj);
    
    return "success"


}
module.exports = {getStudents,createStudent}; //{getStudents:getStudents}


