const express = require("express");
const bodyParser = require("body-parser");
// have been pull out the database code
const Student = require("./database");
const models = require("./models");
const app = express();
const environments = require("./environments");
const logging = require("./logs");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// ================================ general ================================
let memberShipNumber = 0;

// ================================ api body ================================
/**
 * this is a test route
 */
app.route("/").get((req, res) => {
  logger.all("get in this /");
  res.send("hello man");
});

app.get("/test", (req, res) => {
  res.send(models.test());
});

/**
 * this for submist form
 */
app.route("/submit").post((req, res) => {
  
  /**
   * show the date for the register
   */
  var date = new Date();
  var datestring =
    date.toString().split(" ")[3] +
    " " +
    date.toString().split(" ")[1] +
    " " +
    date.toString().split(" ")[2];
  /**
   * constrol the group 1
   */
  memberShipNumber += 1;
  /**
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
    id: memberShipNumber
  });

  newStudent
    .save()
    .then(result => {
      /**
       * save student successfully
       */
      models.sending(result["emailAddress"]);
      console.log(result.emailAddress);
      logging.info(result.emailAddress+" send email successfully");
      res.send("希望能在那天见到你");
    })
    .catch(error => {
      /**
       * now, only has duplicate error
       */
      console.log(error["message"]);
      logging.info(req.email+" error: "+ error);
      res.send("已经注册过了哦");
    });
});

/**
 * 用于返回所有用户信息
 */
app.get("/data", (req, res) => {
  Student.find({}).then(result => {
    res.json(result);
  });
});

// ================================ server run ================================
app.listen(environments.port, () => {
  console.log("server running");
});
