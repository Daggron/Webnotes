const router = require('express').Router();
const {isAuth} = require('../controllers/isauth');
const notesController = require('../controllers/notes');

router.route('/').get(isAuth , notesController.notes );

module.exports = router;