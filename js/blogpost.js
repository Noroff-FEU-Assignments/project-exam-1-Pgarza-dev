const loader = document.querySelector(".loader");
const tagsUrl = "https://pgarza-dev.com/wp-json/wp/v2/tags";
const baseUrl = "https://pgarza-dev.com/wp-json/wp/v2/posts";
const totalPosts = "?per_page=100";
const endPoint = "?category_name=fight-posts";

async function fetchData() {
  try {
    // for view more button
    const allPostResponse = await fetch(baseUrl + totalPosts);
    const allPostData = await allPostResponse.json();
    const allPosts = allPostData;
    console.log(allPosts);
    

    const response = await fetch(baseUrl);
    const data = await response.json();
    const posts = data;

    const tagsResponse = await fetch(tagsUrl);
    const tags = await tagsResponse.json();
    const tagsData = tags;
    console.log(tagsData);

    // Top View All Posts button filtering posts by tags
    const ufcTagId = tags.find((x) => x.name === "ufc-fights").id;
    console.log(ufcTagId);
    
    const backstageTagId = tags.find((x) => x.name === "backstage").id;
    const fighterFriendsTagId = tags.find(
      (x) => x.name === "fighter-friends"
    ).id;
    const trainingCampsTagId = tags.find((x) => x.name === "training-camps").id;

    const fightPosts = allPosts.filter((post) => post.tags.includes(ufcTagId));
    console.log(fightPosts);
    
    const backstagePosts = allPosts.filter((post) =>
      post.tags.includes(backstageTagId)
    );
    const fighterFriends = allPosts.filter((post) =>
      post.tags.includes(fighterFriendsTagId)
    );
    const trainingCampPosts = allPosts.filter((post) =>
      post.tags.includes(trainingCampsTagId)
    );

    // Fetching first 10 posts only
    const blogPostsContainer = document.querySelector(".blog-post-container");
    loader.style.display = "none";
    for (let i = 0; i < posts.length; i++) {
      blogPostsContainer.innerHTML += `<article class="fight-card-posts">
    <div>
      <img class="blog-imgs" src=${posts[i].jetpack_featured_media_url} alt="${posts[i].excerpt.rendered}">
      <h4>${posts[i].title.rendered}</h4>
      <p>${posts[i].date_gmt}</p>
    </div>
    <div>
      <p>${posts[i].excerpt.rendered}</p>
    </div>
    <div>
      <a class="blog-post-read-more" href="singlepost.html?id=${posts[i].id}">Read More</a>
    </div>
  </article>`;
    }

    // Filtering posts by tags
    const latestFightPosts = document.querySelector(".latest-fight-posts");
    const behindTheScenesPosts = document.querySelector(
      ".behind-the-scenes-posts"
    );
    const fighterFriendsPosts = document.querySelector(
      ".fighter-friends-posts"
    );
    const trainingPosts = document.querySelector(".training-camps-posts");
    const filterViewAllBtn = document.querySelectorAll(".dropbtn");

    // Latest Fight Posts
    latestFightPosts.addEventListener("click", function () {
      blogPostsContainer.innerHTML = "";
      for (let i = 0; i < fightPosts.length; i++) {
        blogPostsContainer.innerHTML += `<article class="fight-card-posts">
      <div>
        <img class="blog-imgs" src=${fightPosts[i].jetpack_featured_media_url} alt="${fightPosts[i].excerpt.rendered}">
        <h4>${fightPosts[i].title.rendered}</h4>
        <p>${fightPosts[i].date_gmt}</p>
      </div>
      <div>
        <p>${fightPosts[i].excerpt.rendered}</p>
      </div>
      <div>
        <a class="blog-post-read-more" href="singlepost.html?id=${fightPosts[i].id}">Read More</a>
      </div>
    </article>`;
      }
      console.log(fightPosts);
    });

    // Behind The Scenes Posts
    behindTheScenesPosts.addEventListener("click", function () {
      blogPostsContainer.innerHTML = "";
      for (let i = 0; i < backstagePosts.length; i++) {
        blogPostsContainer.innerHTML += `<article class="fight-card-posts">
      <div>
        <img class="blog-imgs" src=${backstagePosts[i].jetpack_featured_media_url} alt="${backstagePosts[i].excerpt.rendered}">
        <h4>${backstagePosts[i].title.rendered}</h4>
        <p>${backstagePosts[i].date_gmt}</p>
      </div>
      <div>
        <p>${backstagePosts[i].excerpt.rendered}</p>
      </div>
      <div>
        <a class="blog-post-read-more" href="singlepost.html?id=${backstagePosts[i].id}">Read More</a>
      </div>
    </article>`;
      }
      console.log(backstagePosts);
    });

    // Fighter Friends Posts
    fighterFriendsPosts.addEventListener("click", function () {
      blogPostsContainer.innerHTML = "";
      for (let i = 0; i < fighterFriends.length; i++) {
        blogPostsContainer.innerHTML += `<article class="fight-card-posts">
      <div>
        <img class="blog-imgs" src=${fighterFriends[i].jetpack_featured_media_url} alt="${fighterFriends[i].excerpt.rendered}">
        <h4>${fighterFriends[i].title.rendered}</h4>
        <p>${fighterFriends[i].date_gmt}</p>
      </div>
      <div>
        <p>${fighterFriends[i].excerpt.rendered}</p>
      </div>
      <div>
        <a class="blog-post-read-more" href="singlepost.html?id=${fighterFriends[i].id}">Read More</a>
      </div>
    </article>`;
      }
      console.log(fighterFriends);
    });

    // Training Camp Posts
    trainingPosts.addEventListener("click", function () {
      blogPostsContainer.innerHTML = "";
      for (let i = 0; i < trainingCampPosts.length; i++) {
        blogPostsContainer.innerHTML += `<article class="fight-card-posts">
      <div>
        <img class="blog-imgs" src=${trainingCampPosts[i].jetpack_featured_media_url} alt="${trainingCampPosts[i].excerpt.rendered}">
        <h4>${trainingCampPosts[i].title.rendered}</h4>
        <p>${trainingCampPosts[i].date_gmt}</p>
      </div>
      <div>
        <p>${trainingCampPosts[i].excerpt.rendered}</p>
      </div>
      <div>
        <a class="blog-post-read-more" href="singlepost.html?id=${trainingCampPosts[i].id}">Read More</a>
      </div>
    </article>`;
      }
      console.log(trainingCampPosts);
    });

    // View More Button to fetch all posts
    const viewMoreBtn = document.querySelector(".load-more-posts");

    viewMoreBtn.addEventListener("click", function () {
      if (viewMoreBtn.innerHTML === "View All Posts") {
        viewMoreBtn.innerHTML = "View Less Posts";
        blogPostsContainer.innerHTML = "";
        for (let i = 0; i < allPosts.length; i++) {
          blogPostsContainer.innerHTML += `<article class="fight-card-posts">
      <div>
        <img class="blog-imgs" src=${allPosts[i].jetpack_featured_media_url} alt="${allPosts[i].excerpt.rendered}">
        <h4>${allPosts[i].title.rendered}</h4>
        <p>${allPosts[i].date_gmt}</p>
      </div>
      <div>
        <p>${allPosts[i].excerpt.rendered}</p>
      </div>
      <div>
        <a class="blog-post-read-more" href="singlepost.html?id=${allPosts[i].id}">Read More</a>
      </div>
    </article>`;
        }
      } else {
        viewMoreBtn.innerHTML = "View All Posts";
        blogPostsContainer.innerHTML = "";
        for (let i = 0; i < posts.length; i++) {
          blogPostsContainer.innerHTML += `<article class="fight-card-posts">
      <div>
        <img class="blog-imgs" src=${posts[i].jetpack_featured_media_url} alt="${posts[i].excerpt.rendered}">
        <h4>${posts[i].title.rendered}</h4>
        <p>${posts[i].date_gmt}</p>
      </div>
      <div>
        <p>${posts[i].excerpt.rendered}</p>
      </div>
      <div>
        <a class="blog-post-read-more" href="singlepost.html?id=${posts[i].id}">Read More</a>
      </div>
    </article>`;
        }
      }
    });
  } catch (error) {
    console.log({ error: "Something went wrong with the API request" });
  } finally {
    console.log("API request completed.");
  }
}
fetchData();

// Hamburguer Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
