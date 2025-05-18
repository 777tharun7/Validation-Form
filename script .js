document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission
  
    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Reset previous errors
    clearErrors();
  
    let isValid = true;
  
    // Validation logic using if/else and basic conditions
  
    // Name must be at least 5 characters
    if (name.length < 5) {
      showError("nameError", "Name must be at least 5 characters.");
      isValid = false;
    }
  
    // Email must contain '@'
    if (!email.includes("@")) {
      showError("emailError", "Enter a valid email address.");
      isValid = false;
    }
  
    // Phone must be exactly 10 digits and not '123456789'
    if (phone.length !== 10 || isNaN(phone) || phone === "123456789") {
      showError("phoneError", "Enter a valid 10-digit phone number.");
      isValid = false;
    }
  
    // Password validation
    if (
      password.length < 8 ||
      password.toLowerCase() === "password" ||
      password.toLowerCase() === name.toLowerCase()
    ) {
      showError("passwordError", "Password must be strong and not your name or 'password'.");
      isValid = false;
    }
  
    // Confirm password must match password
    if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match.");
      isValid = false;
    }
  
    // If valid, simulate form success
    if (isValid) {
      alert("Form submitted successfully ✅");
      // Redirect to the success page
      window.location.href = "success.html";
      document.getElementById("userForm").reset(); // Reset form
    }
  });
  
  // Function to display error message
  function showError(id, message) {
    document.getElementById(id).innerText = message;
  }
  
  // Clear all error fields
  function clearErrors() {
    const errorFields = ["nameError", "emailError", "phoneError", "passwordError", "confirmPasswordError"];
    for (let i = 0; i < errorFields.length; i++) {
      document.getElementById(errorFields[i]).innerText = "";
    }
  }