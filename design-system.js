// Reference: Chatgpt
// Made changes according to my code
// design-system.js
document.addEventListener("DOMContentLoaded", function () {
    // Add 'active' class to the current page link
    var currentPage = window.location.href;
    var links = document.querySelectorAll(".nav__link, .SN__link");
  
    links.forEach(function (link) {
      if (link.href === currentPage) {
        link.classList.add("active");
      }
    });
  });
  
  function toggleNav() {
    var sidenav = document.getElementById("Sidenav");
    var hamburger = document.querySelector(".hamburger");
    var cancel = document.querySelector(".cancel");
  
    // Toggle the side navbar
    sidenav.style.display = sidenav.style.display === "block" ? "none" : "block";
  
    // Toggle the visibility of hamburger and cancel icons
    hamburger.style.display =
      hamburger.style.display === "none" ? "inline-block" : "none";
    cancel.style.display =
      cancel.style.display === "none" ? "inline-block" : "none";
  }
  