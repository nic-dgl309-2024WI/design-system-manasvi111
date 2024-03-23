// Reference: Chatgpt
// Made changes according to my code
// design-system.js
function toggleNav() {
  var sidenav = document.getElementById("myMainnav");
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

  
 /*
  function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    var cancelIcon = document.querySelector(".cancel");
    var hamburgerIcon = document.querySelector(".hamburger");

    // Get the computed style of navLinks
    var computedStyle = window.getComputedStyle(navLinks);

    if (computedStyle.display === "block") {
        navLinks.style.display = "none";
        cancelIcon.style.display = "none";
        hamburgerIcon.style.display = "inline";
    } else {
        navLinks.style.display = "block";
        cancelIcon.style.display = "inline";
        hamburgerIcon.style.display = "none";
    }
}*/
