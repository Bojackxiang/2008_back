const express = require("express");
const bodyParser = require("body-parser");
// have been pull out the database code
const Student = require("./controller/database");
const controller = require("./controller/controller");
const app = express();
const environments = require("./environments");
const logging = require("./logs");
const idGenerator = require("./controller/idgenerator");
var date = new Date();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// ================================ general ================================
console.log(date.toString());

let memberShipNumber = 0;

// ================================ api body ================================
/**
 * this is a test route
 */
app.route("/").get((req, res) => {
  logging.info("get in this /");
  res.send("hello man");
});

app.get("/test", (req, res) => {
  idGenerator.idGenerator(121);
  res.send(controller.test());
});

/*****************************************************************************
 * this for submist form
 */
app.route("/submit").post((req, res) => {
  /**
   * show the date for the register
   */
  
  var datestring =
    date.toString().split(" ")[3] +
    " " +
    date.toString().split(" ")[1] +
    " " +
    date.toString().split(" ")[2];
  /*********
   * constrol the group 1
   */
  memberShipNumber += 1;
  var memberId = idGenerator.idGenerator(memberShipNumber);
  /**********
   * generating basic information and save
   */
  const name = req.body.name;
  const email = req.body.emailAddress;
  const school = req.body.school;
  const major = req.body.major;

  var newStudent = new Student({
    studentName: name,
    emailAddress: email,
    studentSchool: school,
    studentMajor: major,
    joinDate: datestring,
    id: memberId,
  });

  Student.find({ emailAddress: email }).then(result => {
    // 没有个这个用户
    if (result.length == 0) {
      newStudent.save().then(result => {
        controller.sending(result["emailAddress"]);
        console.log("获取的email address " + result["emailAddress"]);
        logging.info(result.emailAddress + " send email successfully");
        res.json("good");
      });
    } else {
      /********************
       * 该用户已经注册过了
       */
      res.json("bad");
    }
  });
});

/*****************************************************************************
 * 用于返回所有用户信息
 */
app.get("/checkdata", (req, res) => {
  Student.find({}).then(result => {
    res.json(result);
  });
});

/*****************************************************************************
 * 用于返回所有用户信息
 */
app.get("/removedata", (req, res) => {
  controller.removeTable();
  res.send("delete table");
});

// ================================ server run ================================
app.listen(environments.port, () => {
  console.log("server running");
});
