function submitFeedback(event) {
    if (event) event.preventDefault();

    // Get latest values from inputs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Set values in the display section
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';

    alert('Thank you for your valuable feedback');
}

// Attach event listener to button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Handle Enter key for submission
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission/reload
        submitFeedback();
    }
});