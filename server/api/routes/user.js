const router= require('express').Router();
const usercontroller = require('../controllers/user');

router.route('/register').get(usercontroller.register);

module.exports = router;