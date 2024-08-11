const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const EmployeeData=mongoose.model('employee',employeeSchema);
module.exports=EmployeeData

