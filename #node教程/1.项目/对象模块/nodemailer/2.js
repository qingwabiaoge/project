var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var wellknown = require("nodemailer-wellknown");
var config = wellknown("QQ");

config.auth = {
    user: '393502736',
    pass: 'xdcxhzcyexzrbghi'
}

var transporter = nodemailer.createTransport(smtpTransport(config));

var mailOptions = {
    from: "name<393502736@qq.com>",
    to: "393502736@qq.com",
    subject: "test",
    text: "text plain",
    html: "<div>div content</div>"
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});