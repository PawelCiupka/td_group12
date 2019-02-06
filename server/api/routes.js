const express = require('express');
const router = express.Router();

// Controllers declarations
const mailCtrl = require('./controller/mailController');
const userCtrl = require('./controller/userController');
const dayCtrl = require('./controller/dayController');
const hourCtrl = require('./controller/hourController');



// MailController Routing
router.post('/sendMail', mailCtrl.sendMail);

// UserController Routing
router.get('/authorization', userCtrl.authorization);

// DayController Routing
router.post('/day/create', dayCtrl.create);
router.get('/day/getAll', dayCtrl.getAll);

// HourController Routing
router.post('/hour/create', hourCtrl.create);
router.get('/hour/getAll', hourCtrl.getAll);
    

module.exports = router;