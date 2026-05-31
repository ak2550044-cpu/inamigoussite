//anim.js
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});

//navbar.js
import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ toggleDark }) {
  return (
    <motion.header 
      className="fixed top-0 w-full bg-green-900 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-xl font-bold">InAmigos Foundation</h1>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          <li><button onClick={toggleDark} className="bg-orange-500 px-3 py-1 rounded">🌙</button></li>
        </ul>
      </nav>
    </motion.header>
  );
}
//main.js
// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = " Toggle Dark Mode";
  toggleBtn.className = "dark-toggle";
  document.querySelector(".header").appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Smooth Scroll
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash) {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Simple Contact Form Validation
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      const email = contactForm.querySelector("input[type='email']");
      if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});
//
