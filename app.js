const nodemailer = require('nodemailer');
const express = require("express");

const app = express();

function sendMail(){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'suman159singh@gmail.com',
            pass: 'bdelcwklzkkufavv'
        }
    });
    
    const mailOptions = {
        from: 'suman159singh@gmail.com',
        to: 'suman159singh@gmail.com',
        subject: 'Node Mailer Testing',
        text: 'Hello This is a mail from NodeMailer'
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            // do something useful
        }
    });
}

app.get("/", function(req,res){
    res.sendFile(__dirname + "\\index.html");
})

app.listen(3000, function(){
    console.log("App Started at PORT : 3000");
})



// bdel cwkl zkku favv