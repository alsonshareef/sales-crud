let express = require('express');
let router = express.Router();
let landing = require('../controllers/landing');

/* GET home landing page. */
router.get('/', landing.get_landing);

/* POST submit lead */
router.post('/', landing.post_lead);

/* GET list of leads and individual leads */
router.get('/leads', landing.get_leads);
router.get('/lead/:lead_id', landing.get_individualLead);

/* GET and POST for update lead page */
router.get('/lead/:lead_id/edit', landing.get_updateLead);
router.post('/lead/:lead_id/edit', landing.update_lead);

module.exports = router;
