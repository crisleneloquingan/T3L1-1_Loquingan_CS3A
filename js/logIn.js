const validEmail = "user@example.com";
const validPassword = "password123";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validEmail && password === validPassword) {
        alert("Login successful!");
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}

