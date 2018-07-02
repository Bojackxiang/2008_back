const mongoose = require("mongoose");
const Student = require("./controller/database");
var date = new Date();

module.exports = function savingNewUser() {
  var datestring =
    date.toString().split(" ")[3] +
    " " +
    date.toString().split(" ")[1] +
    " " +
    date.toString().split(" ")[2];

    const name = req.body.name;
    const email = req.body.emailAddress;
    const school = req.body.school;
    const major = req.body.major;
  
};
