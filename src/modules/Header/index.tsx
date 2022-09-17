import React from 'react'
import { connect } from 'react-redux'

import { HeaderDiv, HeaderDivBackground } from './styles'

import MenuBar from './MenuBar'
import MenuOpc from './MenuOpc'
 
const Header = ({ height }) => {
 

  return (
    <HeaderDivBackground >
      <HeaderDiv  style={{ height }}>
        <MenuBar/>
        <MenuOpc/>
      </HeaderDiv>
    </HeaderDivBackground>
  )
}

const mapStateToProps = (state: {menu: { height: string }}) => ({
  height: state.menu.height
})

export default connect(mapStateToProps, null)(Header)

