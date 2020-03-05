let express = require('express');
let router = express.Router();
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);

module.exports = router;
