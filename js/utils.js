export const tagsUrl = 'https://pgarza-dev.com/wp-json/wp/v2/tags';
export const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts'
export const totalPosts = '?per_page=100'
export const endPoint = '?category_name=fight-posts'



// const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts' 
// // const endPoint = ''
// // const specificEndPoint = ''
// async function fetchData(baseUrl) {
// try {   
//     const response = await fetch(baseUrl)
//     const data = await response.json()
//     return data
    



// }catch(error){
//     console.log({error: 
//         'Something went wrong with the API request'})
// }
// }
// export {fetchData, baseUrl}


// const ourProducts = document.querySelector(".productContainer");

// const url = "https://dummyjson.com/products";

// async function makeApiCall() {
//   try {
//     const response = await fetch(url);

//     const results = await response.json();

//     const items = results.products;

//     console.log(items);

//     ourProducts.innerHTML = "";

//     for (let i = 0; i < items.length; i++) {
//       console.log(items[i].title);

//       if (!items[i].images[1]) {
//         continue;
//       }

//       ourProducts.innerHTML += `<div class="product-card"  >
//                                   <a href="details.html?id=${items[i].id}" ><h1> ${items[i].title}</h1></a>
//                                   <a href="details.html?id=${items[i].id}"> <img class="img" src=${items[i].images[1]} width="300px"/> </a>
//                                   <a href="details.html?id=${items[i].id}"><h2>$${items[i].price} </h2></a>
//                                   </div>
//                                 `;
//     }
//   } catch (error) {
//     console.log(error);
//     ourProducts.innerHTML = alert("error", error);
//   }
// }

// makeApiCall();