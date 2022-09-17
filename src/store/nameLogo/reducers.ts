import { types } from './actions'
import { ActionsProps, Inital_state } from './interface'

const INITIAL_STATE: Inital_state = {
  nameLogo: 'HomePage'
}

export const nameLogo = (state = INITIAL_STATE, action: ActionsProps) => {
  switch(action.type) {

    case types.SET_NAME_LOGO:
      return {
        ...state,
        nameLogo: action.payload,
      }
      
    default: 
      return state
  }
}