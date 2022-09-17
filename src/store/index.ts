import { createStore ,combineReducers, applyMiddleware, compose } from "redux"

//MIDDLERWARES
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'

//REDUCERS
import { menu } from "./menu/reducers"
import { nameLogo } from "./nameLogo/reducers"
import { cart } from "./cart/reducers"
import { productList } from "./api/reducers"

const reducers = combineReducers({
  menu,
  nameLogo,
  cart,
  productList
})

//ACTIONS
import editMenu from "./menu/actions"
import setCart from "./cart/actions"
import setNameLogo from "./nameLogo/actions"
import editProductList from "./api/actions"

export const actions = {
  setNameLogo,
  setCart,
  editMenu,
  editProductList
}

//CONFIG  
const composeEnhancers = (typeof window !== 'undefined' && 
(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose 

const store = applyMiddleware(
  promise, multi, thunk)(createStore)(
  reducers,
  composeEnhancers()
)

export default store