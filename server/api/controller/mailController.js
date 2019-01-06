const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tdgroup12.Team@gmail.com',
        pass: "TowerDefence"
    }
});

module.exports = {
    sendMail : function(req, res){ 
        const { firstname, lastname, mail } = req.body;

        console.log(req.body);

        const mailOptions = {
            from: mail,
            to: 'tdgroup12.Team@gmail.com',
            subject: 'Ktoś chcę zagrać w grę!', 
            html: '<h1>Cześć! </h1><h3>Chcę zagrać w waszą grę.</h3>' +
            '<p>Imię: ' + firstname + 
            '</p><p>Nazwisko: ' + lastname + 
            '</p>'
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if(err)
                console.log('Send Mail error: ' + err);
            else
                console.log('Send mail succes: ' + info);
        })
    }
}