const loader = document.querySelector('.loader');
const postContainer = document.querySelector('.single-post-content-container');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
document.title = `Pablo Garza | Post`;


const singlePostUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts/' + id;

async function getSpecificPost() {
    try {

    const response = await fetch(singlePostUrl);
    const data = await response.json();
    const posts = data;

    loader.style.display = 'none';
    postContainer.innerHTML += `<div>
            <h1 class="fight-post-header">${posts.title.rendered}</h1>
            <img class="fight-post-img" src="${posts.jetpack_featured_media_url}" alt="Pablo Garza and Fredson Paixoa face off">
        </div>

        <dialog class="post-dialog">
        <img class="fight-post-img" src="${posts.jetpack_featured_media_url}" alt="Pablo Garza and Fredson Paixoa face off">
        </dialog>

        <div>
            <p class="post-date-styling">${posts.date}</p>
        </div>
        <div class="post-paragraph-content">
            <p>${posts.excerpt.rendered}</p>
            Sincerely,
                    </p>
                    <p>Pablo Garza</p>
                </div>`;

//add event listener to open dialog box
const modal = document.querySelector('.fight-post-img');
const dialog = document.querySelector('.post-dialog');
modal.addEventListener('click', () => {
    dialog.showModal();
});
document.addEventListener('click', function(event) {
    if (dialog.contains(event.target) ) {
        dialog.close();
        console.log('dialog closed');        
    }
});
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
        
getSpecificPost()

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
