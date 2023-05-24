// import { tagsUrl, baseUrl, totalPosts,e } from "./index.js";

// import { tagsUrl } from "./utils";
console.log('blogpost.js is connected');



const tagsUrl = 'https://pgarza-dev.com/wp-json/wp/v2/tags';
const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts'
const totalPosts = '?per_page=100'
const endPoint = '?category_name=fight-posts'

async function fetchData() {
try {
    const response = await fetch(baseUrl + totalPosts)
    const data = await response.json()
    // return data
    console.log(data)
    
}
catch(error){
    console.log({error:
        'Something went wrong with the API request'})
}
finally{
    console.log('API request completed.')  
}
}
fetchData()

function createPosts(data){
  const blogPostsContainer = document.querySelector('.blog-post-container')
  for (i =0; i < data.length; i++){
    blogPostsContainer.innerHTML += `<article class="fight-card-posts">
  <div>
    <img class="blog-imgs" src="images/PvsPaixoa.jpg" alt="Pablo Garza vs Fredson Paixão face off.">
    <h4>The Ultimate Fighter Season 12 Finale</h4>
    <p>Posted: 01/05/2023</p>
  </div>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ea quas perferendis voluptas
      doloremque
      illo vero amet consectetur magnam? Aspernatur totam, unde id obcaecati quidem accusamus omnis animi
      voluptas
      delectus?</p>
  </div>
  <div>
    <a class="blog-post-read-more" href="">Read More</a>
  </div>
</article>`
};
  }
createPosts()



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
// console.log(hamburger);
