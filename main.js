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
const images = [...document.querySelectorAll('.txt-card')];
// pop up
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const ImageIndex = document.querySelector('.index');

let index = 0;

images.forEach((item, i ) => {
  item.addEventListener('click', () => {
    updateImage(i);
    popup.classList.toggle('active');
  })
})
const updateImage = (i) => {
  let path = `images/images${i+1}.jpg`;
  largeImage.src = path;
  imageName.innerHTML = path;
  ImageIndex.innerHTML = `0${i+1}`;
  index = i;
}
closeBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
})