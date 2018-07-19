const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const sourceId = require("../controller/source");
const generateTempalte = require("./html-template");

class reportService {
  static sendingReport() {
    var html = "";

    var transporter = nodemailer.createTransport({
      host: "webcloud50.au.syrahost.com",
      port: "465",
      secure: String(process.env.EMAIL_PORT || "465") === "465" ? true : false,
      auth: {
        user: "admin@aisfexpo.com.au",
        pass: "Pg2CSxxSJCBErXUQ8JqetAmDtmcudZ6B"
      }
    });

    sourceId.find({}, (err, result) => {
      // [ { _id: 5b4ee2215f9a5e026766a035,
      //   source: 'zhaodandanxiangweijie.com',
      //   counter: 2,
      //   __v: 0 },
      // { _id: 5b4ee6875f9a5e026766a036,
      //   source: 'austickets.com.au',
      //   counter: 0,
      //   __v: 0 },
      // { _id: 5b4ee6d55f9a5e026766a037,
      //   source: 'default',
      //   counter: 1,
      //   __v: 0 } ]
      var mailOptions = {
        from: "admin@aisfexpo.com.au",
        to: "batmandocode@gmail.com",
        subject: "source report",
        html: "", // html body
      };
      mailOptions.html = generateTempalte.reportService(result);
      transporter.sendMail(mailOptions, (err, info)=>{
        if(!err){
          console.log("report邮件已经发送 "+info);
        }else{
          console.log("error");
        }
      })
    });
  }
}

module.exports = reportService;
