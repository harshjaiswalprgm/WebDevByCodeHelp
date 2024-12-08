// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevents form from submitting
    }
});

// Image Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
images[currentIndex].style.display = 'block';

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Dark Mode Toggle
let isDarkMode = false;
document.getElementById('toggleDarkMode')?.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
    });
});
