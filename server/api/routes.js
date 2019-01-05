const express = require('express');
const router = express.Router();

const mailCtrl = require('./controller/mailController');

router.get('/sendMail', mailCtrl.sendMail);
//router.route('/sendMail').get(mailCtrl.sendMail);

module.exports = router;