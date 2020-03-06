const models = require('../models');

/* GET callbacks */
exports.get_landing = (req, res, next) => {
  res.render('landing', { title: 'Express' });
};

exports.get_leads = (req, res, next) => {
  return models.Lead.findAll().then(leads => {
    res.render('leads', { title: 'Leads', leads: leads });
  });
};

exports.get_individualLead = (req, res, next) => {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('individual_lead', { lead: lead });
  });
};

exports.get_updateLead = (req, res, next) => {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead/update_lead', { title: 'Update lead', lead: lead });
  });
};

exports.update_lead = (req, res, next) => {
  return models.Lead.update(
    {
      email: req.body.lead_email
    },
    {
      where: {
        id: req.params.lead_id
      }
    }
  ).then(result => {
    res.redirect(`/lead/${req.params.lead_id}`);
  });
};

/* POST callbacks */
exports.post_lead = (req, res, next) => {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads');
  });
};
