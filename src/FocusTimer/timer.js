import * as el from './elements.js'
import state from './state.js'

let minutes = 0
let seconds = 0

function getTime() {
  minutes = Number(el.minutes.textContent)
  seconds = Number(el.seconds.textContent)
}

export function countdown() {
  clearInterval(state.setTimeoutId)

  getTime()

  if(!state.isRunning) {
    return
  }

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    console.log('end ')
    return
  }

  state.setTimeoutId = setTimeout(() => countdown(), 1000)

  updateDisplay(minutes, seconds)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}

export function plusFiveMinutes() {
  getTime()
  minutes += 5
  updateDisplay(minutes, seconds)
}

export function minusFiveMinutes() {
  getTime()

  if(minutes > 5) {
    minutes -= 5
  }

  updateDisplay(minutes, seconds) 
}