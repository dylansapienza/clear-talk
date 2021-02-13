const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/say-something', controllers.saySomething);

router.post('/account-creation', controllers.accountCreation);

module.exports = router;