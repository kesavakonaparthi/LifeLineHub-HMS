
const track = document.querySelector('.slider-track');
let slideIndex = 0; // Current slide index
const slide = document.querySelectorAll('.slide');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Show Slide

let currentIndex = 0;


// Move the slider

function showSlide(index) {
	slide.forEach((slide, i) => {
		slide.classList.remove('active');
		dots[i].classList.remove('active');
		if (i === index) {
			slide.classList.add('active');
			dots[i].classList.add('active');
		}
	});
	slideIndex = index;
}

// Next Slide
function nextSlide() {
	slideIndex = (slideIndex + 1) % slides.length;
	showSlide(slideIndex);
}

// Previous Slide
function prevSlide() {
	slideIndex = (slideIndex - 1 + slides.length) % slides.length;
	showSlide(slideIndex);
}

// Jump to Slide
function currentSlide(index) {
	showSlide(index);
}

// Auto Slide
setInterval(() => {
	nextSlide();
}, 4000); // Change every 4 seconds

// Initial Call
showSlide(slideIndex);
