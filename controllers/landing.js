const models = require('../models');

/* GET callbacks */
exports.get_landing = (req, res, next) => {
  res.render('landing', { title: 'Express' });
};

exports.show_leads = (req, res, next) => {
  return models.Lead.findAll().then(leads => {
    res.render('leads', { title: 'Leads', leads: leads });
  });
};

/* POST callbacks */
exports.submit_lead = (req, res, next) => {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads');
  });
};
