import React, { useEffect } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'

import Card from '../components/Card'
import { actions } from '../store'

import { DispatchProps, HomeProps, OwnProps, State } from '../types/home'
import { CardContainer } from '../styles/styles'

const Home = ({setProductList, setNameLogo, productList }: HomeProps) => {

  const asyncProducts = async() => {
    await setProductList()
  }

  useEffect(() => {
    setNameLogo('HomePage')
    asyncProducts()
  }, [])

  return (
    <>
      <h1> Lista de produtos </h1>
      <CardContainer>
      {productList && 
        productList.map((list) => {
          const valuesNumber = Number(list.price)
          const priceBR = valuesNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return (
          <Card
            key={list.id}
            id={list.id}
            title={list.name}
            img={list.img}
            price={priceBR}
          />
        )})}
      </CardContainer> 
    </>
  )
}

const mapStateToProps = (state: State) => ({
  productList: state.productList.list.data

})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  addToCart: actions.editProductList.addToCart,
  setNameLogo: actions.setNameLogo.setNameLogo,
  setProductList: actions.editProductList.setProductList,
  incrementCartAmount: actions.setCart.incrementCartAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
