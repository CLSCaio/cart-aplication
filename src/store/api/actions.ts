import axios from "axios"

import { Types } from "./interface"

export const types = {
  SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
}

const url = 'https://backend-products-api.herokuapp.com/'

const editProductList = {
  setProductList: async () => {
    const req = axios.get(`${url}`)
    const data = await req.then(({ data }) => data)

    return {
      type: types.SET_PRODUCT_LIST,
      payload: data
    };
  },
  
  removeFromCart: (id: number) => ({
    type: types.REMOVE_FROM_CART,
    payload: id
  }),
  
  addToCart: (id: number) => ({
    type: types.ADD_TO_CART,
    payload: id
  })
}

export default editProductList