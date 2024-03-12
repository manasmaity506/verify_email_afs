const nodemailer= require('nodemailer');
const crypto= require('crypto');
require("dotenv").config();
function mailmeotp(userEmail){
    const transporter=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure: true,
        auth:{
            user: "manasmaity493@gmail.com",
            pass: process.env.PASS
        }
    })
    
    function makeMyOTP(){
        let otp=Math.floor(100000 + Math.random() * 900000);
        return otp.toString();
    }
    const newOTP=makeMyOTP(6);

    function generateVerificationToken(){
        return crypto.randomBytes(20).toString('hex');
    }
    const token=generateVerificationToken();

    const verificationLink=`http://localhost:1111/verify?token=${token}`

    const mail={
        from: "manasmaity493@gmail.com",
        to: userEmail,
        subject: "[OTP] Verify Your Account",
        html: `<p>OTP you requested has been generated</p>
        <p> please use the below OTP to login to our portal <br> ${newOTP} </p>
        <p> or </p> 
        <p> You can also use the verification link below <br>
        <a href="${verificationLink}">Verify Your Account</a></p>`
    }
    
    transporter.sendMail(mail,(error,info)=>{
        if(error) {
            console.log("Error");
        }
        else{
            console.log("email sent: "+ info.response);
        }
    });
    return [newOTP,token];
}

module.exports=mailmeotp;