import { button as btn, div, text } from './src/dom_utils'
import { searchBook } from './src/services'
import './style.css'


const app = document.querySelector('#app')

const resultContainer = div()

const button = btn('Hae kirjat', async () => {

  const { records } = await searchBook()

  const buildings = records.map((record) => {

    return record.buildings.map(building => div(
      'result',
      text("Kirjasto"),
      text(building.translated),
    ))

  })

  const flatted = buildings.flat()

  resultContainer.replaceChildren(...flatted)
})

app.append(button, resultContainer)


