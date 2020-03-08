const deleteLead = leadID => {
  fetch(`/lead/${leadID}/delete`, {
    method: 'POST'
  });
  document.getElementById(`${leadID}`).remove();
};
