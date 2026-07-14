// ===============================
// LOGIN PAGE JAVASCRIPT
// File: js/login.js
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const showPassword = document.getElementById("showPassword");

    // Show / Hide Password
    if (showPassword) {
        showPassword.addEventListener("change", function () {
            password.type = this.checked ? "text" : "password";
        });
    }

    // Login Validation
    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();

            // Email Validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                alert("Please enter a valid email address.");
                email.focus();
                return;
            }

            // Password Validation
            if (passwordValue.length < 6) {
                alert("Password must be at least 6 characters.");
                password.focus();
                return;
            }

            // Demo Login
            if (
                emailValue === "admin@gmail.com" &&
                passwordValue === "admin123"
            ) {

                alert("Login Successful!");

                window.location.href = "portfolio.html";

            } else {

                alert("Invalid Email or Password.");

            }

        });

    }

});