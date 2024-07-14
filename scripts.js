document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', register);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
});

function register(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(username)) {
        document.getElementById('message').innerText = 'Username already exists!';
    } else {
        localStorage.setItem(username, password);
        document.getElementById('message').innerText = 'Registration successful!';
        document.getElementById('registerForm').reset();
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        document.getElementById('message').innerText = 'Login successful!';
        // Redirect to home.html after 1 second
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        document.getElementById('message').innerText = 'Invalid username or password!';
    }
}
