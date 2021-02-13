const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/say-something', controllers.saySomething);

router.post('/account-creation', controllers.accountCreation);

router.post('/logincred', controllers.loginCred);

module.exports = router;