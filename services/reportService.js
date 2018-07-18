const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const sourceId = require("../controller/source");

class reportService{

  static sendingReport(){
    var transporter = nodemailer.createTransport({
      host: 'webcloud50.au.syrahost.com',
      port: "465",
      secure: String( process.env.EMAIL_PORT || "465") === "465" ? true: false,
      auth: {
        user: "admin@aisfexpo.com.au",
        pass: "Pg2CSxxSJCBErXUQ8JqetAmDtmcudZ6B",
      }
    });

    sourceId.find({}, (err, result)=>{
      console.log(result);
    });

  }
}
 




module.exports = reportService;

