type SET_OPEN_MENU = 'SET_OPEN_MENU';

export type Types = {
  SET_OPEN_MENU: SET_OPEN_MENU;
} 

export interface Inital_state {
  height: string;
}

export interface ActionsProps {
  payload: string;
  type: SET_OPEN_MENU;
};