const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
Student = require("./database");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// ================================ general ================================
let memberShipNumber = 0;

function promiseBuilding(x) {
  return new Promise((resolve, reject) => {
    if (x > 10) {
      return resolve(x + 1);
    } else {
      return reject("reject");
    }
  });
}

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "batmandocode@gmail.com",
    pass: "911004wsrA"
  }
});

function sending(name, emailAddress) {
  var mailOptions = {
    from: "batmandocode@gmail.com",
    to: emailAddress,
    subject: "Sending Email using Node.js",
    html: "<b>Hello world?</b>" + name
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email has been send to " + mailOptions["to"]);
    }
  });
}

// ================================ api body ================================
/**
 * this is a test route
 */
app.route("/").get((req, res) => {
  promiseBuilding(1).then(x => {
    console.log(x);
  });
});

/**
 * this for submist form
 */
app.route("/submit").post((req, res) => {
  console.log("post from /submit");
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
  const mobileorwechat = req.body.emailAddress;
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
      sending(email, name);
      res.send("希望能在那天见到你");
    })
    .catch(error => {
      /**
       * now, only has duplicate error
       */
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
app.listen(3000, () => {
  console.log("server running");
});
