import styled from "styled-components";

export const HeaderDivBackground = styled.div`
  width: 100%;
  background-color: var(--second-color);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  transition: 0.7s;
 
  top: 0; 
  
  @media(min-width: 650px) {
    height: 50px;
    align-items: center;
    transition: 0;
  }

  * {
    color: var(--main-color);

    li:hover {
      color: var(--second-hover-color);
      text-decoration: underline;
    }
  }
`

export const HeaderDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  transition: 0.7s;
  overflow: hidden;
  padding: 0 1rem;
  

  @media(min-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0;
  }
`
