import setCart from '../cart/actions';
import { types } from './actions'
import { ActionsProps, Inital_state } from './interface';

const INITIAL_STATE: Inital_state = {
  list: {
    data: []
  },
  cartList: [],
  
}

export const productList = (state = INITIAL_STATE, action: ActionsProps) => {
  switch(action.type) {  

    case types.SET_PRODUCT_LIST:
      return {
        ...state, 
        list: action.payload
      }

    case types.ADD_TO_CART: 
      const addItem = state.cartList.find(({ id }) => id === action.payload)
      if(!addItem) {
        const apiItem = state.list.data.find(({ id }) => id === action.payload)
        state.cartList.push(apiItem)
        setCart.incrementCartAmount()
      }
      return ({
        ...state,
      })
       
    case types.REMOVE_FROM_CART:
      const id = action.payload

      for(let i=0; i<state.cartList.length; i++) {
        if(state.cartList[i].id == id) {
          state.cartList.splice(i, 1)
        }
      }
      return ({
        ...state, 
      })

    default: return state
  }
}

   