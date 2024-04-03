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

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    const categoryName = item.querySelector('h3').textContent; // Get the category name from the h3 element
    updateImage(i, categoryName); // Pass the category name to the updateImage function
    popup.classList.toggle('active');
  });
});
const updateImage = (i, categoryName) => {
  let path = `images/image${i+1}.jpg`;
  largeImage.src = path;
  imageName.innerHTML ="";
  ImageIndex.innerHTML = `0${i+1}`;
  index = i;
}
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});


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
const testiCards = document.querySelectorAll('.testi-card');

testiCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    testiCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove('hovered');
      }
    });
    card.classList.add('hovered');
  });
});

