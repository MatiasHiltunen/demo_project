import { card } from './src/components/card'
import { styledButton } from './src/components/styled_button'
import { styledInput, styledNumberInput } from './src/components/styled_input'
import { button as btn, div, html, style, text, textInput } from './src/dom_utils'
import { searchBook } from './src/services'
import './style.css'

const state = {
  searchWord: '',
  limit: 10
}

const app = document.querySelector('#app')

const resultContainer = div('result-container')


const searchField = styledInput((value) => {
  state.searchWord = value
})

const limitField = styledNumberInput((value) => {
  state.limit = value
})

const button = styledButton('Hae kirjat', async () => {

  console.log(state.searchWord)

  const { records } = await searchBook({
    lookfor: state.searchWord,
    limit: state.limit
  })

  const results = records.map((record) => {

    const buildings = record.buildings.map(building => text(building.translated))

    const urls = record.onlineUrls.map(item => {
      const {url} = item

      return `<p class="title">
        <strong><a href="${url}" target="_blank"> linkki </a></strong>
      </p>`
    })

    return card({
      title: record.title,
      description: "testikuvaus",
      authors: "Testi testi",
      urls: urls.join('')
    }) 
  })

  const flatted = results.flat()

  resultContainer.replaceChildren(...flatted)
})

app.append(
  searchField, 
 /*  limitField,  */
  button, 
  resultContainer,
)


