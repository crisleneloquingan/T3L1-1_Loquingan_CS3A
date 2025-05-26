const validEmail = "user@example.com";
const validPassword = "password123";

function signUp() {
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }else if (!email) {
        alert("Please fill out the required fields. ")
    }else{
    alert("Sign-up successful!");
    }
}