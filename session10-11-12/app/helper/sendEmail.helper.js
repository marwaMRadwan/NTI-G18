const nodemailer = require("nodemailer")
const smtpConfig = {
    service:'gmail',
    auth:{
        user: "marwaradwan666@gmail.com",
        pass: "123@Mero"
    }
}
const sendEmail = (userEmail) =>{
    try{
        const transporter = nodemailer.createTransport(smtpConfig)
        let mailOptions = {
            from:"session 10",
            to: userEmail,
            subject:"hello",
            text:"hello from site"
        }
        transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports= sendEmail