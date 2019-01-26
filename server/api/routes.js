const express = require('express');
const router = express.Router();

// Controllers declarations
const mailCtrl = require('./controller/mailController');
const userCtrl = require('./controller/userController');
const dayCtrl = require('./controller/dayController');



// MailController Routing
router.post('/sendMail', mailCtrl.sendMail);

// UserController Routing
router.get('/authorization', userCtrl.authorization);

// DayController Routing
router.post('/createDay', dayCtrl.create);
router.get('/getAllDays', dayCtrl.getAll);
    

module.exports = router;