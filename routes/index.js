let express = require('express');
let router = express.Router();
let landingControllers = require('../controllers/landing');

/* GET home landing page. */
router.get('/', landingControllers.get_landing);

/* POST submit lead */
router.post('/', landingControllers.post_lead);

/* GET list of leads and individual leads */
router.get('/leads', landingControllers.get_leads);
router.get('/lead/:lead_id', landingControllers.get_individualLead);

/* GET and POST for update lead page */
router.get('/lead/:lead_id/edit', landingControllers.get_updateLead);
router.post('/lead/:lead_id/edit', landingControllers.update_lead);

/* POST for delete lead */
router.post('/lead/:lead_id/delete', landingControllers.delete_lead);

/* Will delete the paragraph but don't know how to reload page automatically to show list of leads after lead is deleted. */
router.post('/lead/:lead_id/delete-json', landingControllers.delete_lead_json);

module.exports = router;
