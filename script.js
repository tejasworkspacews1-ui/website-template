// Universal Template - Shared JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.mobile-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
            } else {
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            alert('Thank you, ' + name + '! Your message has been sent successfully. note : its a demo modal, to really contact me, checkout the social links given.');
            contactForm.reset();
        });
    }
});
