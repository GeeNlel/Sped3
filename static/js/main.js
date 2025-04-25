/**
 * Spéder Felújítás - Main JavaScript
 * Handles interactions, animations and functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });
    }

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animateElements.length > 0) {
        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe each element
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }

    // References filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const referenceItems = document.querySelectorAll('.reference-item');
    
    if (filterButtons.length > 0 && referenceItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                referenceItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Gallery lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-popup');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                const imageUrl = this.getAttribute('href');
                
                // Create lightbox elements
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                
                const lightboxContent = document.createElement('div');
                lightboxContent.className = 'lightbox-content';
                
                const lightboxImage = document.createElement('img');
                lightboxImage.src = imageUrl;
                
                const closeButton = document.createElement('span');
                closeButton.className = 'lightbox-close';
                closeButton.innerHTML = '&times;';
                
                // Append elements
                lightboxContent.appendChild(lightboxImage);
                lightboxContent.appendChild(closeButton);
                lightbox.appendChild(lightboxContent);
                document.body.appendChild(lightbox);
                
                // Prevent scrolling when lightbox is open
                document.body.style.overflow = 'hidden';
                
                // Close lightbox on click
                lightbox.addEventListener('click', function() {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                });
                
                // Close lightbox with escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        if (document.contains(lightbox)) {
                            document.body.removeChild(lightbox);
                            document.body.style.overflow = '';
                        }
                    }
                });
                
                // Prevent propagation on image click
                lightboxImage.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
        });
    }

    // Form validation enhancement
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const privacyCheck = document.getElementById('privacyCheck');
            
            if (privacyCheck && !privacyCheck.checked) {
                e.preventDefault();
                alert('Kérjük, fogadja el az adatvédelmi tájékoztatót a folytatáshoz.');
            }
        });
    }

    // Flash message auto-dismiss
    const flashMessages = document.querySelectorAll('.alert');
    
    if (flashMessages.length > 0) {
        flashMessages.forEach(message => {
            setTimeout(() => {
                const bootstrapAlert = new bootstrap.Alert(message);
                bootstrapAlert.close();
            }, 5000);
        });
    }

    // Testimonial carousel for reference page (if multiple testimonials exist)
    const testimonialsContainer = document.querySelector('.testimonials-container');
    
    if (testimonialsContainer) {
        // Initialize carousel if needed
        const carouselElement = document.getElementById('testimonialCarousel');
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: 5000,
                touch: true
            });
        }
    }

    // Add animation classes to elements
    const serviceCards = document.querySelectorAll('.service-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (serviceCards.length > 0) {
        serviceCards.forEach(card => card.classList.add('animate-on-scroll'));
    }
    
    if (testimonialCards.length > 0) {
        testimonialCards.forEach(card => card.classList.add('animate-on-scroll'));
    }
    
    if (projectCards.length > 0) {
        projectCards.forEach(card => card.classList.add('animate-on-scroll'));
    }

    // Toggle mobile navigation menu when clicked outside
    document.addEventListener('click', function(e) {
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse) {
            if (!navbarCollapse.contains(e.target) && !e.target.classList.contains('navbar-toggler')) {
                const toggleButton = document.querySelector('.navbar-toggler');
                toggleButton.click();
            }
        }
    });
});
