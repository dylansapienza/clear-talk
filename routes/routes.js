const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/say-something', controllers.saySomething);

router.post('/account-creation', controllers.accountCreation);

router.post('/logincred', controllers.loginCred);

router.post('/api/getChats', controllers.getChats);

router.post('/api/createChat', controllers.createChat);


module.exports = router;