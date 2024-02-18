let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
})

sr.reveal('.text', {delay:200, origin: 'top'})
sr.reveal('.form-container form', {delay:800, origin: 'left'})
sr.reveal('.heading', {delay:800, origin: 'top'})
sr.reveal('.ride-container .box', {delay:500, origin: 'top'})
sr.reveal('.services-container .box', {delay:500, origin: 'top'})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rentNowBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    modal.style.display = "block"; // Open the modal
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Fake payment functionality
document.getElementById("payButton").addEventListener("click", function() {
    // Simulate payment success
    alert("Paid");
    // Close the modal
    modal.style.display = "none";
});


// Get all the "Rent Now" buttons
var rentNowBtns = document.querySelectorAll(".rentNowBtn");

// Loop through each "Rent Now" button and attach a click event listener
rentNowBtns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        modal.style.display = "block"; // Open the modal
    });
});