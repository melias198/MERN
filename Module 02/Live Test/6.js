

function showAlertOnHover(elementId, message) {
    const element = document.getElementById(elementId);
  
    if (!element) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
    }
  
    element.addEventListener('mouseover', () => {
      alert(message);
    });
  }
  
 
  showAlertOnHover('myElement', 'Hello! This is an alert message.');
  
