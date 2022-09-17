import { List } from "../store/api/interface";

export interface HomeProps extends Props {}

export interface State {
  productList: { 
    list: {
      data: List[]
    }
  }
}

export interface DispatchProps {
  addToCart: (id: number) => void;
  setNameLogo: (name: string) => void;
  setProductList: () => void;
  incrementCartAmount: () => void;
}

export interface OwnProps {
  productList: List[]
  
}

export type Props = OwnProps & DispatchProps