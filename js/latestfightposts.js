console.log('latestfightposts.js loaded');

const tagsUrl = 'https://pgarza-dev.com/wp-json/wp/v2/tags';
const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts'
// const totalPosts = '?per_page=100'
// const endPoint = '?category_name=fight-posts'

async function getPost() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
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

