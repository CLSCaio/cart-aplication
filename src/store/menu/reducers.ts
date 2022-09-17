import { types } from './actions'
import { ActionsProps, Inital_state } from './interface'

const INITIAL_STATE: Inital_state = {
  height: '50px'
}

export const menu = (state = INITIAL_STATE, action: ActionsProps) => {
  switch(action.type) {

    case types.SET_OPEN_MENU:
      return {
        ...state,
        height: action.payload
      }
      
    default: 
      return state
  }
}