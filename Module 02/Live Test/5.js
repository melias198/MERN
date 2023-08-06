function confirmAction(question) {
    return window.confirm(question);
  }
  

  const userConfirmed = confirmAction("Are you sure?");
  console.log(userConfirmed);
  