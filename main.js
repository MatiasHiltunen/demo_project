import './style.css'

function createBookElement(building) {

  const book = document.createElement('P')

  book.innerText = building

  return book

}

const app = document.querySelector('#app')

const resultContainer = document.createElement('DIV')

const button = document.createElement('BUTTON')

button.innerText = 'Hae kirjat'

button.addEventListener('click', async ()=>{

  const {records} = await searchBook()

  // const records = results.records

  console.log(records[0].buildings[0].translated)

  //const bookElement = createBookElement(records[0].buildings[0].translated)

  const buildings = records.map((record)=>{
  
    return record.buildings.map(building => createBookElement(building.translated))
    
  })
  
  const flatted = buildings.flat()
  
  resultContainer.replaceChildren(...flatted)
})

app.append(button, resultContainer)

async function searchBook(){

  const response = await fetch('https://api.finna.fi/api/v1/search?lookfor=rajapinnat&field%5B%5D=buildings&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=true&lng=fi')

  const data = await response.json()

  return data

}

