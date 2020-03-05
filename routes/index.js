let express = require('express');
let router = express.Router();
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);

/* GET show leads */
router.get('/leads', landing.show_leads);

/* GET show individual lead */
router.get('/lead/:lead_id', landing.show_individualLead);

/* POST submit lead */
router.post('/', landing.submit_lead);

module.exports = router;
