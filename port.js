const form = document.getElementById('contact-body');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Add event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Validate the form fields
  if (username.value === '' || email.value === '' || message.value === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!ValidEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form if all fields are valid
  form.submit();
  alert('Form submitted successfully');
});

// Function to validate the email format
function ValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}