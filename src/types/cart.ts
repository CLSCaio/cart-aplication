import { List } from "../store/api/interface";

export interface CartProps extends Props {

}

export interface DispatchProps {
  setNameLogo: (name: string) => void;
}

export interface StateProps {
  productList: { cartList: List[] }
}

export interface OwnProps {
  cartList: List[]
}

export type Props = OwnProps & DispatchProps