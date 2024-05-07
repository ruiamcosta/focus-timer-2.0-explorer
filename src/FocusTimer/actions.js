import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function play() {
  if(!state.isRunning) {
    clearInterval(state.setTimeoutId)
    state.setTimeoutId = setTimeout(() => {
      timer.countdown()
    }, 1000)
  }
  state.isRunning = true
}

export function stop() {
  state.isRunning = false
  state.setTimeoutId = null
  timer.updateDisplay()
}

export function plus() {
  timer.plusFiveMinutes()
}

export function minus() {
  timer.minusFiveMinutes()
}

export function forestSound(e) {
  e.target.classList.toggle('select')
  
  if(e.target.classList.contains('select')) {
    sounds.forestSound.play()
  } else {
    sounds.forestSound.pause()
    sounds.forestSound.currentTime = 0
  }
}

export function rainSound(e) {
  e.target.classList.toggle('select')

  if(e.target.classList.contains('select')) {
    sounds.rainSound.play()
  } else {
    sounds.rainSound.pause()
    sounds.rainSound.currentTime = 0
  }
}

export function coffeeShopSound(e) {
  e.target.classList.toggle('select')

  if(e.target.classList.contains('select')) {
    sounds.coffeeShopSound.play()
  } else {
    sounds.coffeeShopSound.pause()
    sounds.coffeeShopSound.currentTime = 0
  }
}

export function fireplaceSound(e) {
  e.target.classList.toggle('select')
  
  if(e.target.classList.contains('select')) {
    sounds.fireplaceSound.play()
  } else {
    sounds.fireplaceSound.pause()
    sounds.fireplaceSound.currentTime = 0
  }
}

