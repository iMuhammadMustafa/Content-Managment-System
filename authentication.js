const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginLink = document.getElementById('login');
const registerLink = document.getElementById('register');
const newHere = document.getElementById('newhere');
const oneofus = document.getElementById('oneofus');

// Display the login form by default
loginForm.style.display = 'flex';
registerForm.style.display = 'none';

oneofus.style.display = 'flex';
newHere.style.display = 'none';

// Switch to register form when clicking "Register" link
loginLink.addEventListener('click', function() {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    oneofus.style.display = 'flex';
    newHere.style.display = 'none';
});

// Switch to login form when clicking "Login" link
registerLink.addEventListener('click', function() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    oneofus.style.display = 'none';
    newHere.style.display = 'flex';
});
