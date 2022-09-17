import React, { useEffect } from "react";
import { connect, MapDispatchToProps } from "react-redux";

import { actions } from "../../store";
import Card from "../../components/Card";

import { CardContainer } from "../../styles/styles";

import { CartProps, StateProps, DispatchProps, OwnProps } from "../../types/cart";

const Carrinho = ({cartList, setNameLogo}: CartProps) => {

  useEffect(() => {  
    cartList
    setNameLogo('Seu Carrinho')
  }, [])

  const totalCartAmount = () => {
    const values = [0]
    let totalValue = 0
    cartList.forEach((e: any) => (values.push(e.price)))
    const valuesNumber = values.map(v => Number(v))
    
    valuesNumber.reduce((total, value) => {
      return totalValue = total + value
    })
      
    return totalValue
  }

  return (
    <>
      <h1> Eu sou o seu carrinho </h1>

      <CardContainer>
      {cartList && cartList.map((items: any) => {
          const valuesNumber = Number(items.price)
          const priceBR = valuesNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return (
          <Card
            key={items.id}
            id={items.id}
            title={items.name}
            img={items.img}
            price={priceBR}
          />
        )})}
      </CardContainer> 

      <h1>
        Valor total dos produtos {cartList && totalCartAmount().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
      </h1>

      { totalCartAmount() >= 10 &&
        <h3 className="freeFrete">
        Frete Gratis 
        </h3>
      }
      
    </>
  )
}

const mapStateToProps = (state: StateProps) => ({
  cartList: state.productList.cartList,

})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  setNameLogo: actions.setNameLogo.setNameLogo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)