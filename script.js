// Responsive hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
console.log("JS Loaded");
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// active link highlight
const links = document.querySelectorAll(".nav-link");

// Get current file name or fallback to index.html
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});