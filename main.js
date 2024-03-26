const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".mainNav__links").forEach(n => n.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
// Example: Stop marquee on hover
const marquee = document.querySelector('.marquee');
marquee.addEventListener('mouseenter', function() {
  this.stop();
});
marquee.addEventListener('mouseleave', function() {
  this.start();
});