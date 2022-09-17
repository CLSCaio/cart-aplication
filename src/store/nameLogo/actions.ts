import { Types } from "./interface"

export const types: Types = {
  SET_NAME_LOGO: 'SET_NAME_LOGO'
}

const setNameLogo = {
  setNameLogo: (nameLogo: string) => ({
    type: types.SET_NAME_LOGO,
    payload: nameLogo
  })
}

export default setNameLogo