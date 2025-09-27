// Grace's Catering - Main JavaScript

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('✅ Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

// Image Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (n >= slides.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = slides.length - 1;
    
    if (slides[currentSlideIndex] && dots[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
    }
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Auto-advance carousel every 4 seconds
let carouselInterval;

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 4000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

// Start carousel when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        startCarousel();
        
        // Pause carousel on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopCarousel);
            heroSection.addEventListener('mouseleave', startCarousel);
        }
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.innerHTML = 'Sending Message...';
                button.disabled = true;
                
                // Re-enable button after 3 seconds (in case of error)
                setTimeout(() => {
                    button.innerHTML = 'Request Free Quote';
                    button.disabled = false;
                }, 3000);
            }
        });
        
        // Form validation feedback
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = 'var(--luxury-pink)';
                }
            });
        });
    }
});

// Gallery interaction with enhanced effects
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Add click animation
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            }
        });
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.gallery-overlay');
            if (overlay) {
                overlay.style.background = 'linear-gradient(transparent, rgba(219, 157, 194, 0.9))';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.gallery-overlay');
            if (overlay) {
                overlay.style.background = 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))';
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Service Cards hover animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--luxury-pink)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(219, 157, 194, 0.2)';
        });
    });
});

// Testimonial cards scroll animation
function animateOnScroll() {
    const cards = document.querySelectorAll('.testimonial-card, .service-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animation elements
    document.querySelectorAll('.testimonial-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger initial animation
    animateOnScroll();
});

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Create install button (optional)
    const installButton = document.getElementById('install-btn');
    if (installButton) {
        installButton.style.display = 'block';
        
        installButton.addEventListener('click', () => {
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the PWA install prompt');
                } else {
                    console.log('User dismissed the PWA install prompt');
                }
                deferredPrompt = null;
            });
        });
    }
});

// Debug: Log page load
console.log('🎉 Grace\'s Catering website loaded successfully!');
console.log('📱 PWA features enabled');
console.log('🖼️ Image carousel initialized');

// Export functions for global access
window.currentSlide = currentSlide;
window.nextSlide = nextSlide;
window.showSlide = showSlide;