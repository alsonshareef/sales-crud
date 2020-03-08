let express = require('express');
let router = express.Router();
let landingControllers = require('../controllers/landing');

/* GET home landing page. */
router.get('/', landingControllers.get_landing);

/* (CREATE) POST submit lead */
router.post('/', landingControllers.post_lead);

/* (READ) GET list of leads and individual leads */
router.get('/leads', landingControllers.get_leads);
router.get('/lead/:lead_id', landingControllers.get_individualLead);

/* (UPDATE) GET and POST for update lead page */
router.get('/lead/:lead_id/edit', landingControllers.get_updateLead);
router.post('/lead/:lead_id/edit', landingControllers.update_lead);

/* (DELETE) POST for delete lead */
router.post('/lead/:lead_id/delete', landingControllers.delete_lead);

module.exports = router;
