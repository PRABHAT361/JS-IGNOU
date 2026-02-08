// Wait for the page to load
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.onsubmit = function(event) {
        // Prevent the page from refreshing on submit
        event.preventDefault();

        // Get values from the inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check logic
        if (username === "Prabhat" && password === "123") {
            messageDiv.innerHTML = "<h2 style='color: green;'>Login successfully</h2>";
        } else {
            messageDiv.innerHTML = "<h2 style='color: red;'>Login failed</h2>";
        }
    };
};