'use strict';
const nodemailer = require('nodemailer');
const config = {
    user: '393502736',
    pass: 'xdcxhzcyexzrbghi'
}

// async..await is not allowed in global scope, must use a wrapper
async function main() {


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        secure: false, // true for 465, false for other ports
        auth: {
            user: config.user, // generated ethereal user
            pass: config.pass // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <393502736@qq.com>', // sender address
        to: '393502736@qq.com,393502736@qq.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);