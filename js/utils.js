const baseUrl = '' 
const endPoint = ''
const specificEndPoint = ''
async function fetchData(url) {
    try {   
    const response = await fetch(url)
    const data = await response.json()
    return data
}catch(error){
    console.log({error: 
        'Something went wrong with the API request'})
}
}

export {fetchData, baseUrl, endPoint, specificEndPoint}