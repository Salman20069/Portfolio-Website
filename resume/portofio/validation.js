// ==========================================
// validation.js
// Registration, Contact & Resume Validation
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Registration Form Validation
    // ===========================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const password = document.getElementById("password").value;
            const confirm = document.getElementById("confirmPassword").value;

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const phonePattern =
                /^[0-9]{10}$/;

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Invalid email address.");
                return;
            }

            if (!phonePattern.test(phone)) {
                alert("Phone number must contain 10 digits.");
                return;
            }

            if (password.length < 6) {
                alert("Password should be at least 6 characters.");
                return;
            }

            if (password !== confirm) {
                alert("Passwords do not match.");
                return;
            }

            alert("Registration Successful!");

            registerForm.reset();

        });

    }

    // ===========================
    // Contact Form Validation
    // ===========================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const cname = document.getElementById("cname").value.trim();
            const cemail = document.getElementById("cemail").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (
                cname === "" ||
                cemail === "" ||
                subject === "" ||
                message === ""
            ) {

                alert("Please fill all fields.");
                return;

            }

            alert("Message Sent Successfully!");

            contactForm.reset();

        });

    }

    // ===========================
    // Resume Upload Validation
    // ===========================

    const resumeForm = document.getElementById("resumeForm");

    if (resumeForm) {

        resumeForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const resume =
                document.getElementById("resume").files[0];

            if (!resume) {

                alert("Please upload your resume.");

                return;

            }

            const allowed = [
                "application/pdf"
            ];

            if (!allowed.includes(resume.type)) {

                alert("Only PDF files are allowed.");

                return;

            }

            if (resume.size > 5 * 1024 * 1024) {

                alert("Maximum file size is 5MB.");

                return;

            }

            alert("Resume Uploaded Successfully!");

            resumeForm.reset();

        });

    }

});