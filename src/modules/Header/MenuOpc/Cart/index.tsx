import React from 'react'
import { connect } from 'react-redux'
import Link from '../../../../components/Link'
import { BsCart4 } from 'react-icons/bs'

import { DivUlLi } from './styles' 
import { CartProps } from './interface'

const Cart = ({ cartAmount }: CartProps)=> {

  return (
    <DivUlLi >
      <ul>
        <Link href='/Carrinho' >
          <li >
            <BsCart4 />
            Carrinho - {cartAmount} item(s)
          </li>
        </Link>
      </ul>
    </DivUlLi>
  ) 
}

const mapStateToProps = (state: {cart: { cartAmount: number }}) => ({
  cartAmount: state.cart.cartAmount
})

export default connect(mapStateToProps, null)(Cart)