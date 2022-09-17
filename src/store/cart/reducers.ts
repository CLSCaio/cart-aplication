import { types } from './actions'
import { ActionsProps, Initial_State } from './interface'

const INITIAL_STATE: Initial_State = {
  cartAmount: 0
}

export const cart = (state = INITIAL_STATE, action: ActionsProps) => {
  switch(action.type) {
    case types.INCREMENT_CART_AMOUNT:
      state.cartAmount++
      return ({
        ...state, 
      })

      case types.DECREMENT_CART_AMOUNT:
        state.cartAmount--
      return ({
        ...state, 
      })
      
    default: return state
  }
}