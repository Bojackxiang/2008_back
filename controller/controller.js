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
    user: "admin@aisfexpo.com.au",
    pass: "Pg2CSxxSJCBErXUQ8JqetAmDtmcudZ6B",
  }
});

exports.sending = function(email) {
  var mailOptions = {
    from: "admin@aisfexpo.com.au",
    to: "",
    subject: "恭喜您成功注册",
    html: "<div><p>亲爱的同学:<br> 您好，<br> 恭喜您成功注册，成为2018年第二届华为AISF澳大利亚国际留学生节专属会员，以下是你的AISF活动当日专属入场券，这将是您入场华为AISF国际留学生节活动的唯一凭证。请妥善保管！建议您保存并下载到手机，以便之后使用。<br></p></p><div style='text-align: center;'><img style='width:200px;' src='https://www.aisfexpo.com.au/assets/ticket.JPG'></div><p><br>此入场券将作为ALL PASS福利卡的临时电子使用券，请登陆AISF官网：https://www.aisfexpo.com.au/，即可了解所有合作商家的促销信息，享受专属AISF会员的优惠。使用时出示本券即可。此券即ALL PASS临时电子使用券将于第二届华为AISF国际留学生节之后过期。</p><p>若想持续享受商家优惠，请于8月18日活动当日，凭此券免费入场并兑换ALL PASS实体卡。ALLPASS福利卡商家优惠将会持续更新，敬请关注www.aisfexpo.com.au查看最新优惠和福利！</p><p>感谢您对本次华为AISF澳大利亚国际留学生节的支持！ 8月18日，现场将汇聚全澳各行业超过40家企业与学校，现场为您解决留学生活中遇到的难题。再次诚挚地感谢您的支持与厚爱，8月18日SMC，我们不见不散！</p><p>2018年第二届华为AISF澳大利亚国际留学生节 时间：8月18日1pm-5pm 地点：SMC, 281 Castlereagh St, Sydney</p><p>AISF国际留学生节组委</p> <div style='text-align: center;'><img src='https://www.aisfexpo.com.au/assets/footer.JPG'></div></div>", // html body
  };

  mailOptions["to"] = email;

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email hasbeen send to " + mailOptions["to"]);
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

/**
 * ==================================================
 * add database
 */
const database =  
[{ studentName: 'yvonne khoo',
emailAddress: 'zxdl62@yahoo.com',
studentSchool: 'top education institute',
studentMajor: '0451802314',
joinDate: '2018 Jul 06',
id: 201807060000001,
__v: 0 },
{ studentName: 'Jessie',
emailAddress: 'quedy2002@yahoo.com',
studentSchool: 'Macquarie University',
studentMajor: '0415270493',
joinDate: '2018 Jul 06',
id: 201807060000002,
__v: 0 },
{ studentName: 'Chuanyao Nie',
emailAddress: 'c.nie@outlook.com',
studentSchool: 'UNSW',
studentMajor: '0497808888',
joinDate: '2018 Jul 06',
id: 201807060000003,
__v: 0 },
{ 
studentName: 'Jialiang Wang',
emailAddress: '136269387@qq.com',
studentSchool: 'unsw',
studentMajor: '0416890405',
joinDate: '2018 Jul 06',
id: 201807060000036,
__v: 0 },
{
studentName: '林宏',
emailAddress: '539945902@qq.com',
studentSchool: '塔斯马尼亚大学',
studentMajor: '0450717515',
joinDate: '2018 Jul 06',
id: 201807060000037,
__v: 0 },
{
studentName: 'Queena shen ',
emailAddress: 'Tun312@163.com',
studentSchool: 'AUSTOP ',
studentMajor: '0470214089',
joinDate: '2018 Jul 06',
id: 201807060000038,
__v: 0 },
{
studentName: 'Janet',
emailAddress: '305247801@qq.com',
studentSchool: '墨尔本大学',
studentMajor: '0450370517',
joinDate: '2018 Jul 06',
id: 201807060000039,
__v: 0 },
{ 
studentName: 'Ruixuan Ren',
emailAddress: 'renruixuan316@126.com',
studentSchool: 'Top Education Institution ',
studentMajor: '0451904460',
joinDate: '2018 Jul 06',
id: 201807060000042,
__v: 0 },
{ 
studentName: 'Jennifer',
emailAddress: '1217465138@qq.com',
studentSchool: 'UNSW',
studentMajor: '0452219161',
joinDate: '2018 Jul 06',
id: 201807060000044,
__v: 0 },
{ 
studentName: 'Rachel',
emailAddress: 'JayDepp@163.com',
studentSchool: 'UNSW',
studentMajor: '0451992935',
joinDate: '2018 Jul 06',
id: 201807060000046,
__v: 0 },
{ 
studentName: 'Wai Man Hui',
emailAddress: 'huiwaiman1983@gmail.con',
studentSchool: 'wentworth institute',
studentMajor: '0426122866',
joinDate: '2018 Jul 06',
id: 201807060000047,
__v: 0 },
{ 
studentName: 'Wai Man Hui',
emailAddress: 'huiwaiman1983@gmail.com',
studentSchool: 'wentworth institute',
studentMajor: '0426122866',
joinDate: '2018 Jul 06',
id: 201807060000048,
__v: 0 },
{
studentName: 'yvonne',
emailAddress: 'z······@yahoo.com',
studentSchool: 'top education institute',
studentMajor: '0451802314',
joinDate: '2018 Jul 06',
id: 201807060000050,
__v: 0 },
{ 
studentName: 'Weiting YU ',
emailAddress: 'verity.y@austop.com.au',
studentSchool: 'Usyd ',
studentMajor: '0403000672',
joinDate: '2018 Jul 06',
id: 201807060000054,
__v: 0 },
{ 
studentName: 'Wenjuan Li',
emailAddress: 'wennnjl@gmail.com',
studentSchool: 'University of Tasmania',
studentMajor: '0458583168',
joinDate: '2018 Jul 10',
id: 201807100000001,
__v: 0 },
{ 
studentName: 'Jennifer Deng',
emailAddress: 'Jennifer.synergies@gmail.com',
studentSchool: 'The university of New Castle ',
studentMajor: '0424628233',
joinDate: '2018 Jul 10',
id: 201807100000002,
__v: 0 },
{ 
studentName: '王卓雅',
emailAddress: 'j430018061@hotmail.com',
studentSchool: 'USYD ',
studentMajor: '0430018061',
joinDate: '2018 Jul 10',
id: 201807100000003,
__v: 0 },
{ 
studentName: '沈慧婷',
emailAddress: '1370063038@qq.com',
studentSchool: '西悉尼大学',
studentMajor: '0416821480',
joinDate: '2018 Jul 10',
id: 201807100000004,
__v: 0 },
{
studentName: '相虹宇',
emailAddress: '1164064429@qq.com',
studentSchool: 'The hotel school ',
studentMajor: '0410111794',
joinDate: '2018 Jul 10',
id: 201807100000005,
__v: 0 },
{
studentName: 'Troy Yanfei Dai',
emailAddress: 'troydyf@gmail.com',
studentSchool: 'Monash',
studentMajor: '0449114710',
joinDate: '2018 Jul 10',
id: 201807100000007,
__v: 0 },
{ 
studentName: 'Yixi xiang',
emailAddress: 'xiangyixi56@gmail.com',
studentSchool: 'University of Wollongong ',
studentMajor: '0427839808',
joinDate: '2018 Jul 10',
id: 201807100000009,
__v: 0 },
{ 
studentName: 'Jessica Li',
emailAddress: 'lsh58602@gmail.com',
studentSchool: 'University of Newcastle',
studentMajor: '0435503090',
joinDate: '2018 Jul 10',
id: 201807100000010,
__v: 0 },
{ 
studentName: 'Zhixian Ma',
emailAddress: 'evanma0704@hotmail.com',
studentSchool: 'ACA',
studentMajor: '0452521668',
joinDate: '2018 Jul 10',
id: 201807100000012,
__v: 0 },
{
studentName: 'Catherine ',
emailAddress: 'ruojiaxin@gmail.com',
studentSchool: 'UTS',
studentMajor: '0426620568',
joinDate: '2018 Jul 10',
id: 201807100000013,
__v: 0 },
{ 
studentName: 'Queenie Liu',
emailAddress: 'queenieliu1223@gmail.com',
studentSchool: 'MQ',
studentMajor: '0415292897',
joinDate: '2018 Jul 10',
id: 201807100000014,
__v: 0 } ]

exports.addDatabase = function(){
  const dbList = database;
  dbList.forEach((datapiece)=>{
    var newStudent = new Student({
      studentName: datapiece.studentName,
      emailAddress: datapiece.emailAddress,
      studentSchool: datapiece.studentSchool,
      studentMajor: datapiece.studentMajor,
      joinDate: datapiece.joinDate,
      id: datapiece.id
    });
    newStudent.save();
  });
}
