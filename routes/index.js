let express = require('express');
let router = express.Router();
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);

/* POST submit lead */
router.post('/', landing.submit_lead);

module.exports = router;
