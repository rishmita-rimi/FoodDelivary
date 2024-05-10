// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    // Perform validation (you can add your own validation logic here)
    if (name.trim() === '' || email.trim() === '' || address.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Display success message and clear form
    alert('Order placed successfully!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
  }
  
  // Add event listener to the form
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  