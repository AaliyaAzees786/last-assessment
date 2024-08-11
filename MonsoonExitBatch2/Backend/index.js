const express = require("express");
const cors = require("cors");
const EmployeeData=require('./connection')
const app = new express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
const EmployeeModel=require('./model');
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await EmployeeModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

//GET
app.get('/get', async(req,res)=>{
  try {
      const data = await EmployeeModel.find();
      res.send(data);
  } catch (error) {
      res.send('Data not found');
  }
})

app.delete('/delete/:id',async(req,res)=>{
  try {
      await EmployeeModel.findByIdAndDelete(req.params.id);
      res.send('Deleted Successfully');
  } catch (error) {
      console.log(error);
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
