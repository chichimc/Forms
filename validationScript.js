    // JavaScript code for form validation
    const myForm = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    myForm.addEventListener('submit', function(event) {

	// Prevent form from submitting
  event.preventDefault();

      // Retrieve the input field value
      const inputValue = inputField.value;
      // Regular expression pattern for alphanumeric input
       const alphanumericRegex = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (alphanumericRegex.test(inputValue)) {

        // Valid input: display confirmation and submit the form
        alert('Success. Input is valid. Form has been submitted');

        } else {

        // Invalid input: display error message
        alert('Error: Input must be alphanumeric (letters and numbers only).');
        }
    });