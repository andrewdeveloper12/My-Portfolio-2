document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.getElementById('nav-list');
    const header = document.getElementById('header');
    const logo = document.querySelector('.logo a');
    let lastScrollY = window.scrollY; // Store the last scroll position

    // Function to handle scroll event
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Add scrolled class
        navbar.style.display = 'none'; // Hide navbar
        logo.style.opacity = '0'; // Hide logo
      } else {
        header.classList.remove('scrolled'); // Remove scrolled class
        navbar.style.display = 'flex'; // Show navbar
        logo.style.opacity = '1'; // Show logo
      }

      // Hide navbar and logo when scrolling down, show when scrolling up
      if (window.scrollY > lastScrollY) {
        navbar.style.display = 'none'; // Hide navbar on scroll down
        logo.style.opacity = '0'; // Hide logo on scroll down
      } else {
        navbar.style.display = 'flex'; // Show navbar on scroll up
        logo.style.opacity = '1'; // Show logo on scroll up
      }
      lastScrollY = window.scrollY; // Update last scroll position
    });

    // Toggle navbar visibility when hamburger is clicked
    hamburger.addEventListener('click', function() {
      navList.classList.toggle('active'); // Toggle navbar visibility
      if (navList.classList.contains('active')) {
        logo.style.opacity = '0'; // Hide logo if navbar is visible
      } else {
        logo.style.opacity = '1'; // Show logo if navbar is hidden
      }
    });
  });