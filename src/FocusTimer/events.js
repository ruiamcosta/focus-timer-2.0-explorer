import * as actions from './actions.js'
import { timerControls, soundControls } from './elements.js'

export function registerControls() {
  timerControls.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    
    if(typeof actions[action] !== 'function') {
      return
    }

    actions[action]()    
  })
  
  soundControls.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    
    if(typeof actions[action] !== 'function') {
      return
    }

    actions[action](e)    
  })
}
