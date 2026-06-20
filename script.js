// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when clicking nav links

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// =========================
// DARK / LIGHT THEME
// =========================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Toggle theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";

    }
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

function revealElements() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation

    if (name.length < 3) {

        e.preventDefault();

        formMessage.style.color = "red";
        formMessage.textContent =
            "Please enter a valid name.";

        return;
    }

    // Email validation

    if (!emailPattern.test(email)) {

        e.preventDefault();

        formMessage.style.color = "red";
        formMessage.textContent =
            "Please enter a valid email address.";

        return;
    }

    // Message validation

    if (message.length < 10) {

        e.preventDefault();

        formMessage.style.color = "red";
        formMessage.textContent =
            "Message must contain at least 10 characters.";

        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent =
        "Sending your message...";
});

// =========================
// CURRENT YEAR IN FOOTER
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${new Date().getFullYear()} Quantum Pixels. All Rights Reserved.`;
}

// =========================
// SMOOTH ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});

// =========================
// CONSOLE WELCOME MESSAGE
// =========================

console.log(`
🚀 Quantum Pixels Portfolio Loaded Successfully

Team Members:
• Krishna Gupta
• Rehan Azim
• Pulak Saha
• Dhruvaraj Nikam

Projects:
• Quiz App
• Expense Tracker
• News App
• GitHub Explorer
• Kanban Board
`);