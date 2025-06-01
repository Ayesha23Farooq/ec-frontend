// Responsive hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
console.log("JS Loaded");
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// active link highlight
const links = document.querySelectorAll(".nav-link");
const currentPath = window.location.pathname;

links.forEach(link => {
  if(link.href.includes(`${currentPath}`)) {
    link.classList.add("active");
  }
});