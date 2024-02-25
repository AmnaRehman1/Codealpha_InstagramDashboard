document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // Perform any login validation here...
  
      // Redirect to Dashboard.html
      window.location.href = 'Dashboard.html';
    });
  });
  