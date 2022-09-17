import React from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { BsFillCartPlusFill } from 'react-icons/bs'
import { MdOutlineDeleteForever } from 'react-icons/md'

import { actions } from "../../store";

import { CardProps, DispatchProps, OwnProps, StateProps } from "./interface";
import { DivCard, DivExtra } from "./styles";

const Card = ({ title, img, price, id, nameLogo, removeFromCart, addToCart, decrementCartAmount, incrementCartAmount }: CardProps) => {
  
  const cartEdit = (tag: 'remove' | 'add') => {
    if(tag === 'remove') {
      removeFromCart(id)
      decrementCartAmount()
    
    } else {
      addToCart(id)
      incrementCartAmount()
    }
  
  }

  return (
    <DivCard >
      
      <h1> {title} </h1>
     
      <img src={img} alt="Imagem não pode ser carregada" />
      
      <DivExtra>
        <h2>{price}</h2>
        {
          nameLogo === 'Seu Carrinho' 
          ? <MdOutlineDeleteForever 
              id={`${id}`} className='remove' 
              onClick={() => cartEdit('remove')}
              
            />
         
          : <BsFillCartPlusFill id={`${id}`} onClick={() => cartEdit('add')}/>
            
        }
      </DivExtra>
    </DivCard>
  )
}

const mapStateToProps = (state: StateProps) => ({
  nameLogo: state.nameLogo.nameLogo
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  removeFromCart: actions.editProductList.removeFromCart,
  addToCart: actions.editProductList.addToCart,
  decrementCartAmount: actions.setCart.decrementCartAmount,
  incrementCartAmount: actions.setCart.incrementCartAmount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)