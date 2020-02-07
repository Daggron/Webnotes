const router= require('express').Router();
const usercontroller = require('../controllers/user');

router.route('/register').post(usercontroller.register);

module.exports = router;