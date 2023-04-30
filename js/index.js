// Hamburguer Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
console.log(hamburger);

// carousel 1
let slideIndex = 1;

// Next/previous controls
function plusSlides(plusSlides) {
  showSlides((slideIndex += plusSlides));
}

// Thumbnail image controls
function currentSlide(changeSlide) {
  showSlides((slideIndex = changeSlide));
}

function showSlides(carouselOne) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (carouselOne > slides.length) {
    slideIndex = 1;
  }
  if (carouselOne < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
showSlides(slideIndex);

// Caraousel 2
let slideIndexTwo = 1;

// Next/previous controls
function plusSlidesTwo(changSlideTwo) {
  showSlidesTwo((slideIndexTwo += changSlideTwo));
}

// Thumbnail image controls
function currentSlideTwo(movSlideTwo) {
  showSlidesTwo((slideIndexTwo = movSlideTwo));
}

function showSlidesTwo(carouselTwo) {
  let i;
  let slides = document.getElementsByClassName('mySlides-two');
  let dots = document.getElementsByClassName('dot');
  if (carouselTwo > slides.length) {
    slideIndexTwo = 1;
  }
  if (carouselTwo < 1) {
    slideIndexTwo = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndexTwo - 1].style.display = 'block';
  dots[slideIndexTwo - 1].className += ' active';
}
showSlidesTwo(slideIndexTwo);

// Caraousel 3
let slideIndexThree = 1;

// Next/previous controls
function plusSlidesThree(changeSlideThree) {
  showSlidesthree((slideIndexThree += changeSlideThree));
}

// Thumbnail image controls
function currentSlideTwo(moveSlideThree) {
  showSlidesthree((slideIndexThree = moveSlideThree));
}

function showSlidesthree(carouselThree) {
  let i;
  let slides = document.getElementsByClassName('mySlides-three');
  let dots = document.getElementsByClassName('dot');

  if (carouselThree > slides.length) {
    slideIndexThree = 1;
  }
  if (carouselThree < 1) {
    slideIndexThree = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndexThree - 1].style.display = 'block';
  dots[slideIndexThree - 1].className += ' active';
}
showSlidesthree(slideIndexThree);

// Caraousel 4
let slideIndexFour = 1;

// Next/previous controls
function plusSlidesFour(changSlideFour) {
  showSlidesFour((slideIndexFour += changSlideFour));
}

// Thumbnail image controls
function currentSlideFour(movSlideFour) {
  showSlidesFour((slideIndexFour = movSlideFour));
}

function showSlidesFour(carouselFour) {
  let i;
  let slides = document.getElementsByClassName('mySlides-four');
  let dots = document.getElementsByClassName('dot');
  if (carouselFour > slides.length) {
    slideIndexFour = 1;
  }
  if (carouselFour < 1) {
    slideIndexFour = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndexFour - 1].style.display = 'block';
  dots[slideIndexFour - 1].className += ' active';
}

showSlidesFour(slideIndexFour);
