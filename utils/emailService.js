const nodemailer = require("nodemailer");

//Öncelikle mail konfigürasyonumu yazıyorum
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: 'login',
        user: "haqqinnyolu@gmail.com",
        pass: "dkdsnabieekwljda",
    },
});

function confirmCodeEmail(userEMail, confirmCode) {
    transporter.sendMail({
        from: 'haqqinnyolu@gmail.com',
        to: userEMail,
        subject: "Confirm Code",
        text: "için confirm code: " + confirmCode,
    });
}


module.exports = {
    confirmCodeEmail
}