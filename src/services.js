export async function searchBook(){

    const response = await fetch('https://api.finna.fi/api/v1/search?lookfor=rajapinnat&field%5B%5D=buildings&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=true&lng=fi')
  
    const data = await response.json()
  
    return data
  
}
  