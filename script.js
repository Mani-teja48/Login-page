function submitForm(event) { 
    event.preventDefault(); 
   
    // Validate form fields 
    const username = document.getElementById('username').value; 
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 
    const phone = document.getElementById('phone').value; 
   
    if (!validateUsername(username) || !validateEmail(email) || 
  !validatePassword(password) || !validatePhone(phone)) { 
      // Validation failed 
      return; 
    } 
}