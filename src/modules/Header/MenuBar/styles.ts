import styled from "styled-components";

export const MenuBarDivPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  @media(min-width: 650px ) {
    width: auto;
    .displayNone {
      display: flex;
    }
  }
`
export const MenuBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
  height: 50px;
 
  svg {
    font-size: 1.3rem;
  }

  .imMenu {
    display: flex;
    cursor: pointer;
  }

  .imUsers {
    display: none;
  }

  @media(min-width: 650px) {
    gap: 0.5rem;

    .imMenu {
      display: none;
    }

    .imUsers {
      display: flex;
    }
  }
  
`

