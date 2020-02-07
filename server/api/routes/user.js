const router= require('express').Router();
const usercontroller = require('../controllers/user');

router.route('/register').post(usercontroller.register);

router.route('/login').post(usercontroller.login);

module.exports = router;