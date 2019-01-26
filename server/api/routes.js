const express = require('express');
const router = express.Router();

// Controllers declarations
const mailCtrl = require('./controller/mailController');
const userCtrl = require('./controller/userController');


// MailController Routing
router.post('/sendMail', mailCtrl.sendMail);

// USerController Routing
router.get('/authorization', userCtrl.authorization);

    

module.exports = router;