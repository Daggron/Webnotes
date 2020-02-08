const router = require('express').Router();
const {isAuth} = require('../controllers/isauth');
const notesController = require('../controllers/notes');

router.route('/postnote').post(isAuth , notesController.addNote);

router.route('/notes').get(isAuth , notesController.notes );

router.route('/notes/:id').get(isAuth , notesController.notesId);

router.route('/author/:userId').get(isAuth , notesController.notesAuthor);

module.exports = router;