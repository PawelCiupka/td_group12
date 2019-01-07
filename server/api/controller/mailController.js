const nodemailer = require('nodemailer');
// const Recaptcha = require('express-recaptcha').Recaptcha;
// const recaptcha = new Recaptcha('6Lf7dYcUAAAAANA14Plpqnb2AGChoIhTatzJjx2m', '6Lf7dYcUAAAAAEPhPqD5BPz9ja4S');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tdgroup12.Team@gmail.com',
        pass: "TowerDefence"
    }
});

module.exports = {
    sendMail : function(req, res){ 
        const { firstname, lastname, mail, message } = req.body;

        console.log(req.body);

        const mailOptions = {
            from: mail,
            to: 'tdgroup12.Team@gmail.com',
            subject: 'Ktoś chcę zagrać w grę!', 
            html: '<h1>Cześć!' +
            '<p>Nazywam się <strong>' + firstname + ' ' + lastname + '</strong>.</p>'
            + '<p>Kontakt: <strong>' + mail +'<strong></p> <br/>'
            + '<p>' + message + '</p>'
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if(err)
                console.log('Send Mail error: ' + err);
            else
                console.log('Send mail succes: ' + info);
        });
    },

    // getRecaptcha : function(req, res) {
    //     res.send( { captcha:res.recaptcha } );
    // }
}