type SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
type ADD_TO_CART = 'ADD_TO_CART';
type REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface Types {
  SET_PRODUCT_LIST: SET_PRODUCT_LIST,
  ADD_TO_CART: ADD_TO_CART,
  REMOVE_FROM_CART: REMOVE_FROM_CART
}

export type List = {   
  id: number;
  name: string;
  price: string;
  img: string;    
}

export interface Inital_state {
  list: {
    data: List[]
  };
  cartList: List[];
}

export interface ActionsProps {
  payload: any
  type: ADD_TO_CART | REMOVE_FROM_CART | SET_PRODUCT_LIST
};