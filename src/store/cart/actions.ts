import { Types } from "./interface"

export const types: Types = {
  INCREMENT_CART_AMOUNT: 'INCREMENT_CART_AMOUNT',
  DECREMENT_CART_AMOUNT: 'DECREMENT_CART_AMOUNT'
}

const setCart = {
  incrementCartAmount: () => ({
    type: types.INCREMENT_CART_AMOUNT,
    payload: +1
  }),

  decrementCartAmount: () => ({
    type: types.DECREMENT_CART_AMOUNT,
    payload: -1
  }),
}

export default setCart