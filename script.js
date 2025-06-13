
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-opacity-90', 'backdrop-blur-sm');
        nav.classList.remove('shadow-md', 'bg-opacity-100');
    } else {
        nav.classList.remove('shadow-lg', 'bg-opacity-90', 'backdrop-blur-sm');
        nav.classList.add('shadow-md', 'bg-opacity-100');
    }
});

// Hero image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function changeSlide() {
    // Hide current slide
    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');

    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show next slide
    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
}

// Start slideshow
let slideInterval = setInterval(changeSlide, 5000);

// Pause slideshow on hover
const heroSection = document.querySelector('section');
heroSection.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

heroSection.addEventListener('mouseleave', () => {
    slideInterval = setInterval(changeSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.testimonials-swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Initialize Team Swiper
document.addEventListener('DOMContentLoaded', function () {
    const teamSwiper = new Swiper('.team-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});


 // Initialize Gallery Swiper
        document.addEventListener('DOMContentLoaded', function() {
            const gallerySwiper = new Swiper('.gallery-swiper', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });

        });
document.querySelectorAll('.before-after-slider').forEach(slider => {
    const wrapper = slider.querySelector('.after-img-wrapper');
    const handle = slider.querySelector('.slider-handle');

    let isDragging = false;
    let bounds = null;
    let animationFrameId = null;
    let latestEvent = null;

    const move = () => {
        if (!latestEvent || !bounds) return;

        const e = latestEvent;
        let pageX = e.type.startsWith('touch') ? e.touches[0].pageX : e.pageX;

        let pos = (pageX - bounds.left) / bounds.width;
        pos = Math.max(0, Math.min(1, pos));

        wrapper.style.width = `${pos * 100}%`;
        handle.style.left = `${pos * 100}%`;

        animationFrameId = null;
    };

    const requestMove = (e) => {
        latestEvent = e;
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(move);
        }
    };

    const startDrag = (e) => {
        e.preventDefault(); // Prevent text selection, image drag, etc.

        isDragging = true;
        bounds = slider.getBoundingClientRect();
        requestMove(e);

        // Prevent text selection while dragging
        document.body.style.userSelect = 'none';
        document.body.style.touchAction = 'none';

        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', onDrag, { passive: false });
        document.addEventListener('touchend', stopDrag);
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent scrolling and selection during drag
        requestMove(e);
    };

    const stopDrag = () => {
        isDragging = false;
        bounds = null;
        latestEvent = null;
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;

        document.body.style.userSelect = '';
        document.body.style.touchAction = '';

        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('touchend', stopDrag);
    };

    handle.addEventListener('mousedown', startDrag);
    handle.addEventListener('touchstart', startDrag, { passive: false });
});




// Initialize Testimonial Swiper
document.addEventListener('DOMContentLoaded', function () {
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Star Rating System
    const starButtons = document.querySelectorAll('.star-rating');
    const ratingInput = document.getElementById('rating');

    starButtons.forEach(button => {
        button.addEventListener('click', function () {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = rating;

            // Update star display
            starButtons.forEach((star, index) => {
                if (index < rating) {
                    star.querySelector('i').classList.remove('text-gray-300');
                    star.querySelector('i').classList.add('text-yellow-400');
                } else {
                    star.querySelector('i').classList.remove('text-yellow-400');
                    star.querySelector('i').classList.add('text-gray-300');
                }
            });
        });

        button.addEventListener('mouseover', function () {
            const hoverRating = parseInt(this.getAttribute('data-rating'));

            starButtons.forEach((star, index) => {
                if (index < hoverRating) {
                    star.querySelector('i').classList.add('text-yellow-400');
                }
            });
        });

        button.addEventListener('mouseout', function () {
            const currentRating = parseInt(ratingInput.value);

            starButtons.forEach((star, index) => {
                if (index >= currentRating) {
                    star.querySelector('i').classList.remove('text-yellow-400');
                }
            });
        });
    });

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Thank you for your testimonial! We appreciate your feedback.');
        form.reset();
        ratingInput.value = 0;
        starButtons.forEach(star => {
            star.querySelector('i').classList.remove('text-yellow-400');
            star.querySelector('i').classList.add('text-gray-300');
        });
    });
});

  // Back to top button
        const backToTopButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-4');
                backToTopButton.classList.add('opacity-100', 'visible', 'translate-y-0');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible', 'translate-y-0');
                backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-4');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // FAQ accordion functionality
        document.querySelectorAll('.group button').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;
                const content = button.nextElementSibling;
                
                // Toggle the content
                content.classList.toggle('hidden');
                
                // Rotate the icon
                const icon = button.querySelector('i');
                icon.classList.toggle('rotate-90');
            });
        });

        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically add form submission logic
            alert('Thank you for your message! We will contact you shortly.');
            this.reset();
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Initialize animations
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
