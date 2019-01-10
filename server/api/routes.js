const express = require('express');
const router = express.Router();
const Recaptcha = require('express-recaptcha').Recaptcha;
const recaptcha = new Recaptcha('6Lf7dYcUAAAAANA14Plpqnb2AGChoIhTatzJjx2m', '6Lf7dYcUAAAAAEPhPqD5BPz9ja4S');

const mailCtrl = require('./controller/mailController');
const userCtrl = require('./controller/userController');

// MailController Routing
router.post('/sendMail', mailCtrl.sendMail);
// router.get('/getRecaptcha', recaptcha.middleware.render, mailCtrl.getRecaptcha);

// USerController Routing
router.get('/authorization', userCtrl.authorization);

    

module.exports = router;