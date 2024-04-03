// Reference: Chatgpt
// Made changes according to my code
// design-system.js
document.addEventListener("DOMContentLoaded", function () {
    // Add 'active' class to the current page link
    var currentPage = window.location.href;
    var links = document.querySelectorAll(".mainNav__link, .sidenav__link");
  
    links.forEach(function (link) {
      if (link.href === currentPage) {
        link.classList.add("active");
      }
    });
  });
  
  function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
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

  
function copyToClipboard() {
  // Get the text from the pre element
  const textToCopy = document.getElementById("codeSnippet").innerText;
  
  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Code copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

function toggleAccordion(element) {
  const item = element.parentElement;
  const items = document.querySelectorAll('.accordion-item');

  for (const otherItem of items) {
    if (otherItem !== item) {
      otherItem.querySelector('.accordion-body').style.maxHeight = '0';
      otherItem.querySelector('.accordion-icon').textContent = '+';
    }
  }

  const body = item.querySelector('.accordion-body');
  const isOpen = parseInt(body.style.maxHeight) > 0;

  body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px'; // Change '1000px' to a desired max-height value
  element.querySelector('.accordion-icon').textContent = isOpen ? '+' : '-';
}