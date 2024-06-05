import Api from './api'
import './style.css'

const URL = 'https://api.adviceslip.com/advice'

const api = new Api(URL)
const adviceContent = document.getElementById('adviceContent')
const newAdviceButton = document.getElementById('newAdviceButton')
const adviceNumber = document.getElementById('adviceNumber')

function getNewAdvice() {
  api
    .get()
    .then(res => {
      if (res.slip) {
        adviceContent.innerHTML = res.slip.advice
        adviceNumber.innerHTML = res.slip.id
      } else throw 'Error: something went wrong with api.adviceslip.com'
    })
    .catch(error => {
      console.error(error)
    })
}

newAdviceButton.addEventListener('click', () => {
  getNewAdvice()
})

getNewAdvice()
