// API
const slideShowContainer = document.querySelector('.slideshow-container');
const slideShowContainerTwo = document.querySelector('.slideshow-container-two');
const slideShowContainerThree = document.querySelector('.slideshow-container-three');
const slideShowContainerFour = document.querySelector('.slideshow-container-four');

const dotContainer = document.querySelector('.dot-container');
const dotContainerTwo = document.querySelector('.dot-container-two');
const dotContainerThree = document.querySelector('.dot-container-three');
const dotContainerFour = document.querySelector('.dot-container-four');
const mySlides = document.querySelectorAll('.mySlides');

const tagsUrl = 'https://pgarza-dev.com/wp-json/wp/v2/tags';
const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts'
const totalPosts = '?per_page=100'
const endPoint = '?category_name=fight-posts'
// const specificEndPoint = ''

async function fetchData() {
  try {
    const tagsResponse = await fetch(tagsUrl);
    const tags = await tagsResponse.json();

    const ufcTagId = tags.find(x => x.name === 'ufc-fights').id;
    const backstageTagId = tags.find(x => x.name === 'backstage').id;
    const fighterFriendsTagId = tags.find(x => x.name === 'fighter-friends').id;
    const trainingCampsTagId = tags.find(x => x.name === 'training-camps').id;

    const response = await fetch(baseUrl + totalPosts)
    const data = await response.json()
    const posts = data
    console.log(data)

    // slideShowContainer.innerHTML = "";

    const fightPosts = posts.filter(post => post.tags.includes(ufcTagId));
    const backstagePosts = posts.filter(post => post.tags.includes(backstageTagId));
    const 
     = posts.filter(post => post.tags.includes(fighterFriendsTagId));
    const trainingCampPosts = posts.filter(post => post.tags.includes(trainingCampsTagId));

    //Carousel 1 - Fight Posts - 1st API call
    fightPosts.forEach(post => {
      if (!post.jetpack_featured_media_url) {
        console.log('No image found');
      }
      else {
        slideShowContainer.innerHTML +=
          `<div class="mySlides fade my-slides-on-mobile ">
      <div class="class-name">Latest Fight Posts</div>
      <div class="img-title">${post.title.rendered}</div>
      <img class="img-border img-zoom" src="${post.jetpack_featured_media_url}">
      }">
      <div class="text">
        <p class="fight-location-text">Location unknown</p>
        <a class="read-more" href="latest-fight-post.html">Read More</a>
      </div>
      </div>`
      }
    });
    

    for (i = 0; i < fightPosts.length; i++)
    {
      dotContainer.innerHTML += 
      `
      <span class="dot" onclick="currentSlide(${i+1})"></span>
      `
    }

    //Carousel 2 - Fighter Friends Posts - 2nd API call
    backstagePosts.forEach(post => {
      if (!post.jetpack_featured_media_url) {
        console.log('No image found');
      }
      else {
        slideShowContainerTwo.innerHTML +=
          `<div class="mySlides-two fade my-slides-on-mobile ">
            <div class="class-name">Behind the Scenes</div>
            <div class="img-title">${post.title.rendered}</div>
            <img class="img-border img-zoom" src="${post.jetpack_featured_media_url}">
            }">
            <div class="text">
              <p class="fight-location-text">Winning doesn't always look pretty</p>
              <a class="read-more" href="">Read More</a>
            </div>
          </div>`
      }
    });

    for (i = 0; i < backstagePosts.length; i++)
    {
      dotContainerTwo.innerHTML += 
      `
      <span class="dotsTwo" onclick="currentSlideTwo(${i+1})"></span>
      `
    }
    
    //Carousel 3 - Fighter Friends Posts - 3rd API call
    fighterFriends.forEach(post => {
      if (!post.jetpack_featured_media_url) {
        console.log('No image found');
      }
      else {
        slideShowContainerThree.innerHTML +=
          `<div class="mySlides-two fade my-slides-on-mobile ">
            <div class="class-name">Behind the Scenes</div>
            <div class="img-title">${post.title.rendered}</div>
            <img class="img-border img-zoom" src="${post.jetpack_featured_media_url}">
            }">
            <div class="text">
              <p class="fight-location-text">Winning doesn't always look pretty</p>
              <a class="read-more" href="">Read More</a>
            </div>
          </div>`
      }
    });

    for (i = 0; i < fighterFriends.length; i++)
    {
      dotContainerThree.innerHTML += 
      `
      <span class="dotsThree" onclick="currentSlideTwo(${i+1})"></span>
      `
    }

  } catch (error) {
    console.log({
      error:
        'Something went wrong with the API request'
    })
  }
  finally {
    console.log('API request completed.')
  }
}




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

function showSlides(carouselOne) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');

  console.log(slideIndex);
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
  console.log(slides);

  const slide = slides[slideIndex - 1];
  console.log(slide);
  if (slide)
    slide.style.display = 'block';
  const dot = dots[slideIndex - 1];
  console.log(dot);
  if (dot)
    dot.className += ' active';
}

// Next/previous controls
function plusSlides(plusSlides) {
  showSlides((slideIndex += plusSlides));
}

// Thumbnail image controls
function currentSlide(changeSlide) {
  showSlides((slideIndex = changeSlide));
}

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

fetchData().then(() => {
  showSlides(slideIndex);
  showSlidesTwo(slideIndexTwo);
  showSlidesThree(slideIndexThree);
  showSlidesFour(slideIndexFour);
});
