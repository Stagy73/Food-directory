// Get all slide elements and previous/next buttons
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Initialize slide index to 0 and set the first slide as active
let slideIndex = 0;
slides[slideIndex].classList.add('active');

// Define function to show the next slide
function showNextSlide() {
    // Remove the active class from the current slide
    slides[slideIndex].classList.remove('active');
    // Increment the slide index and wrap around if necessary
    slideIndex = (slideIndex + 1) % slides.length;
    // Add the active class to the new slide
    slides[slideIndex].classList.add('active');
}

// Define function to show the previous slide
function showPrevSlide() {
    // Remove the active class from the current slide
    slides[slideIndex].classList.remove('active');
    // Decrement the slide index and wrap around if necessary
    slideIndex = (slideIndex + slides.length - 1) % slides.length;
    // Add the active class to the new slide
    slides[slideIndex].classList.add('active');
}

// Add event listeners to previous/next buttons
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Set up auto-play functionality
let autoPlayIntervalId = setInterval(showNextSlide, 5000);

// Define function to stop auto-play
function stopAutoPlay() {
    clearInterval(autoPlayIntervalId);
}

// Define function to start auto-play
function startAutoPlay() {
    autoPlayIntervalId = setInterval(showNextSlide, 5000);
}

// Add event listeners to slideshow container to stop/start auto-play on hover
const slideshowContainer = document.getElementById('slideshow-container');
slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
slideshowContainer.addEventListener('mouseleave', startAutoPlay);
