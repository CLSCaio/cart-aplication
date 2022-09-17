export interface MenuBarProps extends Props {
  height: string
};

export interface DispatchProps {
  openMenu: (name: string) => void
}

export interface OwnProps {
  nameLogo: string
};

export interface State {
  menu: { height:  string };
  nameLogo: { nameLogo: string };
}

type Props = DispatchProps & OwnProps;