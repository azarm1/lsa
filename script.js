
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.navbar ul');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

// FIRST carousel
let slideIndex1 = 0;
showSlide1(slideIndex1);

function changeSlide1(n) {
  slideIndex1 += n;
  showSlide1(slideIndex1);
}

function showSlide1(n) {
  let slides = document.getElementsByClassName("slide1");
  if (n >= slides.length) { slideIndex1 = 0; }
  if (n < 0) { slideIndex1 = slides.length - 1; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex1].style.display = "block";
}

// SECOND carousel
let slideIndex2 = 0;
showSlide2(slideIndex2);

function changeSlide2(n) {
  slideIndex2 += n;
  showSlide2(slideIndex2);
}

function showSlide2(n) {
  let slides = document.getElementsByClassName("slide2");
  if (n >= slides.length) { slideIndex2 = 0; }
  if (n < 0) { slideIndex2 = slides.length - 1; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex2].style.display = "block";
}
