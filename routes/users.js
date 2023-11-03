var express = require('express');
const { loginController } = require('../controllers/authController');
var router = express.Router();

/* GET users listing. */
router.post('/auth', loginController);

module.exports = router;
