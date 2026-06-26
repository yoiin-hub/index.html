// ==========================
// CartFlow Web v1.0
// script.js
// ==========================

// Theme Toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Fade In Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Flow Demo

const flowMessage = document.querySelector(".flow");

const replies = [

    "I found three products you'll love.",

    "Based on your budget, I'd recommend Amber Mist.",

    "Would you like to see more recommendations?",

    "I can also help you compare products."

];

let index = 0;

setInterval(() => {

    if (!flowMessage) return;

    flowMessage.textContent = replies[index];

    index++;

    if (index >= replies.length) {

        index = 0;

    }

}, 4000);
