'use strict'

const nodemailer = require('nodemailer');

nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tdgroup12.Team@gmail.com',
        pass: "TowerDefence"
    }
});

module.exports = {
    sendMail : function(req, res, next){        
        console.log("ŚLEMY MAILA!");
        res.send("XD");
    }
}