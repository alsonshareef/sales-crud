const deleteLead = leadID => {
  fetch(`/lead/${leadID}/delete-json`, {
    method: 'POST'
  });
};
