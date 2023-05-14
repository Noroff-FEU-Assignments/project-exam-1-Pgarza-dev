const baseUrl = 'https://pgarza-dev.com/wp-json/wp/v2/posts' 
const endPoint = ''
const specificEndPoint = ''
async function fetchData(baseUrl, endPoint, specificEndPoint) {
try {   
    const response = await fetch(baseUrl)
    const data = await response.json()
    return data
}catch(error){
    console.log({error: 
        'Something went wrong with the API request'})
}
}

export {fetchData, baseUrl, endPoint, specificEndPoint}