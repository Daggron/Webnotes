const router = require('express').Router();
const {isAuth} = require('../controllers/isauth');
const notesController = require('../controllers/notes');

router.route('/').get(isAuth , notesController.notes );
router.route('/postnote').post(isAuth , notesController.addNote);

module.exports = router;