//  export default fetchData
// import { fetchData, baseUrl} from './utils.js'

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
function plusSlidesTwo(changeSlideTwo) {
  showSlidesTwo((slideIndexTwo += changeSlideTwo));
}

// Thumbnail image controls
function currentSlideTwo(moveSlideTwo) {
  showSlidesTwo((slideIndexTwo = moveSlideTwo));
}

function showSlidesTwo(carouselTwo) {
  let i;
  let slidesTwo = document.getElementsByClassName('mySlides-two');
  let dotsTwo = document.getElementsByClassName('dotsTwo');
  if (carouselTwo > slidesTwo.length) {
    slideIndexTwo = 1;
  }
  if (carouselTwo < 1) {
    slideIndexTwo = slidesTwo.length;
  }
  for (i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = 'none';
  }
  for (i = 0; i < dotsTwo.length; i++) {
    dotsTwo[i].className = dotsTwo[i].className.replace(' active', '');
  }
  slidesTwo[slideIndexTwo - 1].style.display = 'block';
  dotsTwo[slideIndexTwo - 1].className += ' active';
}
showSlidesTwo(slideIndexTwo);

// Caraousel 3
let slideIndexThree = 1;

// Next/previous controls
function plusSlidesThree(changeSlideThree) {
  showSlidesThree((slideIndexThree += changeSlideThree));
}

// Thumbnail image controls
function currentSlideThree(moveSlideThree) {
  showSlidesThree((slideIndexThree = moveSlideThree));
}

function showSlidesThree(carouselThree) {
  let i;
  let slidesThree = document.getElementsByClassName('mySlides-three');
  let dotsThree = document.getElementsByClassName('dotsThree');

  if (carouselThree > slidesThree.length) {
    slideIndexThree = 1;
  }
  if (carouselThree < 1) {
    slideIndexThree = slidesThree.length;
  }
  for (i = 0; i < slidesThree.length; i++) {
    slidesThree[i].style.display = 'none';
  }
  for (i = 0; i < dotsThree.length; i++) {
    dotsThree[i].className = dotsThree[i].className.replace(' active', '');
  }
  slidesThree[slideIndexThree - 1].style.display = 'block';
  dotsThree[slideIndexThree - 1].className += ' active';
}
showSlidesThree(slideIndexThree);

// Caraousel 4
let slideIndexFour = 1;

// Next/previous controls
function plusSlidesFour(changeSlideFour) {
  showSlidesFour((slideIndexFour += changeSlideFour));
}

// Thumbnail image controls
function currentSlideFour(moveSlideFour) {
  showSlidesFour((slideIndexFour = moveSlideFour));
}

function showSlidesFour(carouselFour) {
  let i;
  let slidesFour = document.getElementsByClassName('mySlides-four');
  let dotsFour = document.getElementsByClassName('dotsFour');
  if (carouselFour > slidesFour.length) {
    slideIndexFour = 1;
  }
  if (carouselFour < 1) {
    slideIndexFour = slidesFour.length;
  }
  for (i = 0; i < slidesFour.length; i++) {
    slidesFour[i].style.display = 'none';
  }
  for (i = 0; i < dotsFour.length; i++) {
    dotsFour[i].className = dotsFour[i].className.replace(' active', '');
  }
  slidesFour[slideIndexFour - 1].style.display = 'block';
  dotsFour[slideIndexFour - 1].className += ' active';
}

showSlidesFour(slideIndexFour);


const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts' 
// const endPoint = ''
// const specificEndPoint = ''
async function fetchData(baseUrl) {
try {   
    const response = await fetch(baseUrl)
    const data = await response.json()
    return data
    

}catch(error){
    console.log({error: 
        'Something went wrong with the API request'})
}
}