const mongoose = require('mongoose');
const environments = require("../environments");
// only for local database
// const mongoUrl = "mongodb://localhost:27017/Register";
//mongodb://weijiexiang:911004wsrA@ds221271.mlab.com:21271/registers
const Schema =  mongoose.Schema;

var studentSchema = new Schema({
    studentName: String,
    emailAddress: { type : String , unique : true, required : true, dropDups: true },
    studentSchool: String, 
    studentMajor: String,
    joinDate: String,
    id: Number,
});

mongoose.connect(environments.mongodblocal, (err, db)=>{
  if(err){
      console.log('= = = = = = Data Base Schema = = = = = = = = =');
      console.log(err);
  }else{
      console.log("******************** success connect dbs *******************")
  }
});

var Student = mongoose.model('student', studentSchema); 

module.exports = Student;