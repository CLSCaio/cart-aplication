import { Types } from "./interface"

export const types: Types = {
  SET_OPEN_MENU: 'SET_OPEN_MENU'
}

const editMenu = {
  openMenu: (name: string) => ({
    type: types.SET_OPEN_MENU,
    payload: name
  })
}

export default editMenu