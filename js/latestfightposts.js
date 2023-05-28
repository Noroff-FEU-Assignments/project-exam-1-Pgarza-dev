console.log('latestfightposts.js loaded');

const loader = document.querySelector('.loader');
const postContainer = document.querySelector('.fight-post-content-container');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);
document.title = `Pablo Garza | Latest Fight Posts`;


const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts/' + id;
const totalPosts = '?per_page=100';


async function getPost() {
  try {

    const response = await fetch(baseUrl);
    const data = await response.json();
    const post = data;
    console.log(post);

    postContainer.innerHTML = '';

      postContainer.innerHTML += `<div>
        <h1 class="fight-post-header">${post.title.rendered}</h1>
        <img class="fight-post-img" src="${post.jetpack_featured_media_url}" alt="Pablo Garza and Fredson Paixoa face off">
      </div>
      <div>
        <p class="post-date-styling">${post.date}</p>
      </div>
      <div class="post-paragraph-content">
        <p>${post.excerpt.rendered}</p>
        Sincerely,
                </p>
                <p>Pablo Garza</p>
              </div>`;
          }            
            catch (error) {
                console.log({
                error:
                    'Something went wrong with the API request'
                })
        
            }finally{
                console.log('API request completed.')
            }
        }
        
        getPost()

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

