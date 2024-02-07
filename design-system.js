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
    if (sidenav.style.display === "block") {
        sidenav.style.display = "none";
        hamburger.style.display = "inline-block";
        cancel.style.display = "none";
    } else {
        sidenav.style.display = "block";
        hamburger.style.display = "none";
        cancel.style.display = "inline-block";
    }
}
  