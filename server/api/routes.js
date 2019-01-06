const express = require('express');
const router = express.Router();

const mailCtrl = require('./controller/mailController');

router.post('/sendMail', mailCtrl.sendMail);

module.exports = router;