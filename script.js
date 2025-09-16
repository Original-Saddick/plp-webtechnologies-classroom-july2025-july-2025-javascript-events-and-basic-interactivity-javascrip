// script.js
document.addEventListener('DOMContentLoaded', () => {

    // 🎉 Part 1: Interactive Services Section (Collapsible)
    const serviceToggles = document.querySelectorAll('.service-toggle');
    serviceToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const serviceItem = toggle.closest('.service-item');
            serviceItem.classList.toggle('active');
        });
    });

    // 🎮 Part 2: Success Stories Counter
    let studentCounter = 0;
    const studentCountSpan = document.getElementById('student-count');
    const incrementBtn = document.getElementById('increment-btn');

    incrementBtn.addEventListener('click', () => {
        studentCounter++;
        studentCountSpan.textContent = studentCounter;
    });

    // 📋✅ Part 3: Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const formSuccess = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', (event) => {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        formSuccess.textContent = '';

        let isValid = true;

        // Validate Name: Must not be empty
        if (nameInput.value.trim().length === 0) {
            nameError.textContent = 'Please enter your full name.';
            isValid = false;
        }

        // Validate Email: Using a standard regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Phone (optional but encouraged): Simple check for digits
        // You can make this required by adding the 'required' attribute in HTML
        if (phoneInput.value.trim() !== '' && !/^\d+$/.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Phone number should only contain digits.';
            isValid = false;
        }

        // If all fields are valid, show a success message
        if (isValid) {
            formSuccess.textContent = 'Thank you for your inquiry! We will be in touch shortly. ✅';
            contactForm.reset(); // Reset the form fields
        }
    });
});