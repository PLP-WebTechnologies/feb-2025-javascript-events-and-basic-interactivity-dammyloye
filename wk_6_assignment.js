// Get elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');
const successElement = document.getElementById('success');
const greetButton = document.getElementById('greetButton');
const greetingElement = document.getElementById('greeting');

// Form submission event listener
form.addEventListener('submit', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Validate form fields
    if (validateForm()) {
        // Display success message
        successElement.textContent = `Registration successful for ${nameInput.value}!`;
        errorElement.textContent = '';
    }
});

// Form validation function
function validateForm() {
    // Check if name is not empty
    if (nameInput.value.trim() === '') {
        errorElement.textContent = 'Please enter your name';
        return false;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        errorElement.textContent = 'Please enter a valid email';
        return false;
    }

    // Clear any previous error messages
    errorElement.textContent = '';
    return true;
}

// Greeting button event listener
greetButton.addEventListener('click', () => {
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
        greeting = 'Good morning!';
    } else if (currentTime < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    greetingElement.textContent = greeting;
});
