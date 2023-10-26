const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let counter = 0;
const numImages = 3; // Number of images displayed at once
const imageWidth = 25; // Percentage width of a single image

function slide() {
    counter++;
    if (counter + numImages > images.length) {
        counter = 0;
    }
    slider.style.transform = `translateX(-${counter * imageWidth}%)`;

}

setInterval(slide, 1000); // Change image every 3 seconds

// navbar code

// JavaScript to toggle the mobile navigation menu
const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
const navLinks = document.querySelector('.nav-links');

mobileNavbarBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// navbar end



// Get the dropdown button and content
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the dropdown menu when the button is clicked
dropdownBtn.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target !== dropdownBtn && event.target !== dropdownContent) {
        dropdownContent.style.display = 'none';
    }
});
