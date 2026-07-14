// =============================
// Navbar Active Link
// =============================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// =============================
// Smooth Scroll
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =============================
// Scroll to Top Button
// =============================
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px";
topBtn.style.fontSize = "18px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#007BFF";
topBtn.style.color = "#fff";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =============================
// Welcome Message
// =============================
window.onload = function () {
    console.log("Welcome to Salman Portfolio Website!");
};

// =============================
// Contact Form
// =============================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        form.reset();
    });
}

// =============================
// Dark Mode Toggle
// =============================
const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "80px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "12px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});