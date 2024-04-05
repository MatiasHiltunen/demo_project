
const BASE_URL = 'https://api.finna.fi/api/v1'

export async function searchBook({lookfor, limit}) {

    const params = new URLSearchParams({
        lookfor,
       // 'field[]': 'buildings',
        sort: 'relevance,id asc',
        page: '1',
        limit: limit || '10',
        prettyPrint: 'true',
        lng: 'fi'
    })

    const searchUrl = new URL(BASE_URL + "/search")

    searchUrl.search = params.toString()
    //console.log(searchUrl.toString())

    const response = await fetch(searchUrl.toString())

    const data = await response.json()

    return data

}
