$('.carousel').carousel({
    interval: 5000 // Change image every 5 seconds
});


 // Wait until the document is fully loaded
 document.addEventListener("DOMContentLoaded", function () {
    // Show the welcome modal when the site loads
    $('#welcomeModal').modal('show');
});

// Feedback Form Submission Handler
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}!\n\nYour Feedback:\nRating: ${rating}\nMessage: ${message}`);

    // Optionally, close the modal
    $('#feedbackModal').modal('hide');

    // Reset form
    this.reset();
});










