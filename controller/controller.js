const nodemailer = require("nodemailer");
const Student = require("../controller/database");

/**
 * ==================================================
 * email sendsing function
 */
var transporter = nodemailer.createTransport({
  host: 'webcloud50.au.syrahost.com',
  port: "465",
  secure: String( process.env.EMAIL_PORT || "465") === "465" ? true: false,
  auth: {
    usgiter: "admin@aisfexpo.com.au",
    pass: "Pg2CSxxSJCBErXUQ8JqetAmDtmcudZ6B",
  }
});

exports.sending = function(email) {
  var mailOptions = {
    from: "admin@aisfexpo.com.au",
    to: "",
    subject: "恭喜您成功注册",
    html: "<div style='font-size:12px;'><p>亲爱的同学,您好<br><br>恭喜您成功注册成为2018第二届华为AISF澳大利亚国际留学生节专属会员，以下是您活动专属入场券。<br><br> 这将是您入场本次活动的唯一凭证。请妥善保管！建议您长按保存图片并下载到手机，以便之后使用。<br></p><div style='text-align: center;'><img style='width:200px;' src='https://www.aisfexpo.com.au/assets/ticket.JPG'></div><p>时电子使用券，登陆AISF官网：https://www.aisfexpo.com.au/，即日起至8月18日，这张入场券将作为ALL PASS福利卡的临时电子使用券，登陆AISF官网：https://www.aisfexpo.com.au，即可了解所有合作商家的促销信息，享受专属AISF会员优惠。使用时出示本券即可，本券有效期至2018年8月18日。</p><p>若想持续享受商家优惠，请于8月18日活动当天，凭此券免费入场并兑换ALL PASS实体卡。ALL PASS福利卡商家优惠将持续更新，敬请关注www.aisfexpo.com.au</p><p>感谢您对本次华为AISF澳大利亚国际留学生节的支持！ 8月18日，我们不见不散！</p><p>2018年第二届华为AISF澳大利亚国际留学生节 时间：8月18日1pm-5pm 地点：SMC, 281 Castlereagh St, Sydney</p><p>AISF国际留学生节组委</p> <div style='text-align: center;'><img src='https://www.aisfexpo.com.au/assets/footer.JPG'></div></div>", // html body
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
