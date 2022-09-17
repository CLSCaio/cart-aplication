type SET_NAME_LOGO = 'SET_NAME_LOGO';

export type Types = {
  SET_NAME_LOGO: SET_NAME_LOGO;
} 

export interface Inital_state {
  nameLogo: string;
}

export interface ActionsProps {
  payload: string;
  type: SET_NAME_LOGO;
};