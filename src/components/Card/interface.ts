export interface CardProps extends props {
  title: string;
  img: string;
  price: string
  id: number
}

export interface DispatchProps {
  removeFromCart: (id: number) => void;
  addToCart: (id: number) => void;
  decrementCartAmount: () => void;
  incrementCartAmount: () => void;
} 

export interface OwnProps {
  nameLogo: string
};

export interface StateProps {
  nameLogo: { 
    nameLogo: string
  }
}

type props = DispatchProps & OwnProps;