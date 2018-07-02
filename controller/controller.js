const nodemailer = require("nodemailer");
const Student = require("../controller/database");

/**
 * ==================================================
 * email sendsing function
 */
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "batmandocode@gmail.com",
    pass: "911004wsrA"
  }
});

exports.sending = function(email) {
  var mailOptions = {
    from: "batmandocode@gmail.com",
    to: "",
    subject: "Sending Email using Node.js",
    text: "希望那天能够见到你"
  };

  mailOptions["to"] = email;

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email has been send to " + mailOptions["to"]);
    }
  });
};

/**
 * ==================================================
 * drop mongodb
 */

exports.removeTable = function() {
  Student.remove({})
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * ==================================================
 * Test
 */
exports.test = function() {
  return "test";
};

exports.promiseTest = function promiseBuilding(x) {
  return new Promise((resolve, reject) => {
    if (x > 10) {
      return resolve(x + 1);
    } else {
      return reject("reject");
    }
  });
};
