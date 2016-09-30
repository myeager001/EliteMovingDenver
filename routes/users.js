var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://m.yeager010%40gmail.com:Pinkfloyd70@smtp.gmail.com');

// setup e-mail data with unicode symbols

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);

  var mailOptions = {
      from: 'mike', // sender address
      to: 'm.yeager001@gmail.com', // list of receivers
      subject: 'New Request For Quote ✔', // Subject line
      html: '<h1>Request for more information</h1><ul><li>Name: ' + req.body.first +' '+ req.body.last +
          '</li><li>email: ' + req.body.email + '</li><li>phone ' + req.body.phone + '</li><li>type: ' + req.body.type +
          '</li><li>date of move: ' + req.body.date + '</li><li>moving from: ' + req.body.zip1 + ' to ' + req.body.zip2 +
          '</li><li>Are There stairs: ' + req.body.stairs1 + ', ' + req.body.stairs2 +
          '</li><li>details: ' + req.body.details
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
  res.redirect('/');
});

module.exports = router;
