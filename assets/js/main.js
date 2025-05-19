// This file contains JavaScript code for interactive features of the website, such as form validation, event handling, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Form validation for the contact form
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
                contactFormElement.reset();
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      });
    });

    // Add active class to navigation links on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically handle form submission
        // For now, let's just show an alert
        alert('Thanks for your message! This would normally be sent to a backend server.');
        this.reset();
      });
    }
});