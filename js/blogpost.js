// import { tagsUrl, baseUrl, totalPosts,e } from "./index.js";

// import { tagsUrl } from "./utils";
console.log('blogpost.js is connected');



const tagsUrl = 'https://pgarza-dev.com/wp-json/wp/v2/tags';
const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts'
// const totalPosts = '?per_page=100'
// const endPoint = '?category_name=fight-posts'

async function fetchData() {
try {
  const tagsResponse = await fetch(tagsUrl);
  const tags = await tagsResponse.json();

  const ufcTagId = tags.find(x => x.name === 'ufc-fights').id;
  const backstageTagId = tags.find(x => x.name === 'backstage').id;

  const response = await fetch(baseUrl)
  const data = await response.json()
  const posts = data
  console.log(data)


  // const fightPosts = posts.filter(post => post.tags.includes(ufcTagId));
  // const backstagePosts = posts.filter(post => post.tags.includes(backstageTagId));
    

  const blogPostsContainer = document.querySelector('.blog-post-container');
  for (let i =0; i < posts.length; i++){
    
    blogPostsContainer.innerHTML += `<article class="fight-card-posts">
  <div>
    <img class="blog-imgs" src=${posts[i].jetpack_featured_media_url} alt="Pablo Garza vs Fredson Paixão face off.">
    <h4>${posts[i].title.rendered}</h4>
    <p>${posts[i].date_gmt}</p>
  </div>
  <div>
    <p>${posts[i].excerpt.rendered}</p>
  </div>
  <div>
    <a class="blog-post-read-more" href="">Read More</a>
  </div>
</article>`;
}
} catch(error){
    console.log({error:
        'Something went wrong with the API request'})
}
finally{
    console.log('API request completed.')  
}
}
fetchData();

  
  




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
