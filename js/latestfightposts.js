console.log('latestfightposts.js loaded');
const loader = document.querySelector('.loader');

const postContainer = document.querySelector('.fight-post-content-container');

const tagsUrl = 'https://pgarza-dev.com/wp-json/wp/v2/tags';
const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts'
const totalPosts = '?per_page=100'
// const endPoint = '?category_name=fight-posts'

async function getPost() {
    try {
        const response = await fetch(baseUrl + totalPosts);
        const data = await response.json();
        const posts = data
        console.log(data);

        postContainer.innerHTML += `<div>
        <h1 class="fight-post-header">Title here</h1>
        <img class="fight-post-img" src="images/PvsPaixoa.jpg" alt="Pablo Garza and Fredson Paixoa face off">
      </div>
      <div>
        <p class="post-date-styling">Dec. 5, 2010</p>
      </div>
      <div class="post-paragraph-content">
        <p>Dear fans and supporters,
        </p>
        <p>
          I am thrilled beyond belief to announce that I won my first UFC fight at the Ultimate Fighter Show Season 12
          finale last
          night! It was an incredible experience, and I'm over the moon that I got to share it with all of you.

          From the moment I stepped into the Octagon, I knew that I was going to leave it all out there. The energy was
          electric,
          and I could feel the support of my fans and teammates pushing me forward. I attacked my opponent, Fredson
          Paixao, with
          everything I had, determined to come out on top.

          It was an exhilarating fight that lasted only 51 seconds, but it felt like a lifetime. I found myself in a
          dominant
          position early on, and I knew that I couldn't let up. I landed a crushing flying knee that knocked Paixao to
          the mat and
          sealed the deal. The crowd went wild, and I could feel the excitement in the air. And when I won the "Knockout
          of the
          Night" award, I was over the moon!

          I couldn't have done it without the support of my fans and my team. You've all been there for me through the
          ups and
          downs, and I am grateful beyond words. To my coaches and training partners, you are the backbone of my
          success. Without
          you, I wouldn't have made it this far.

          This win is just the beginning of what I hope will be a long and successful UFC career. I will keep training
          hard,
          pushing myself to be the best fighter I can be, and putting on exciting performances for my fans. I'm honored
          to be part
          of the UFC community, and I can't wait to see what the future holds.

          Thank you all for your support and encouragement. This win is for all of us!
        </p>
        <p>
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

getPost(baseUrl)

