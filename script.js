$('.carousel').carousel({
    interval: 5000 // Change image every 5 seconds
});


 // Wait until the document is fully loaded
 document.addEventListener("DOMContentLoaded", function () {
    // Show the welcome modal when the site loads
    $('#welcomeModal').modal('show');
});