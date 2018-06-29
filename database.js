const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/Register";
const Schema =  mongoose.Schema;

var studentSchema = new Schema({
    studentName: String,
    emailAddress: {type: String, unique: false},
    studentSchool: String, 
    studentMajor: String,
    joinDate: String,
    id: Number,
});

mongoose.connect(mongoUrl, (err, db)=>{
  if(err){
      console.log('= = = = = = Data Base Schema = = = = = = = = =');
      console.log(err);
      console.log('= = = = = = = = = = = = = = = = = = = = = =');
  }else{
      console.log("******************** success connect dbs *******************")
  }
});

var Student = mongoose.model('student', studentSchema); 

module.exports = Student;