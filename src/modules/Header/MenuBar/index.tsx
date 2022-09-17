import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import {ImUsers, ImMenu} from 'react-icons/im'

import { actions } from '../../../store'

import { DispatchProps, MenuBarProps, OwnProps, State } from './interface'
import { MenuBarDiv, MenuBarDivPrincipal } from './styles'

const MenuBar = ({height, openMenu, nameLogo}: MenuBarProps) => {

  const openOrClosed = () => {
    const test = height === '50px' ? '120px' : '50px'
    return openMenu(test)
  }

  return (
    <MenuBarDivPrincipal >
      <MenuBarDiv>
        <div className="imMenu" >
          <ImMenu onClick={() => openOrClosed()}/>
        </div>
        
        <div className="imUsers">
          <ImUsers />
        </div>
 
        <h1> 
          {nameLogo}
        </h1>

      </MenuBarDiv>
    </MenuBarDivPrincipal>
  )
}

const mapStateToProps = (state: State) => ({
  height: state.menu.height,
  nameLogo: state.nameLogo.nameLogo
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  openMenu: actions.editMenu.openMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)