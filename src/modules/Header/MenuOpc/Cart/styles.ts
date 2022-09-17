import styled from "styled-components";

export const DivUlLi = styled.div`
  margin-top: 40px;
  display: flex;
 
  ul {
    list-style: none;
    display: flex;
    
    li {
      display: flex;
      gap: 10px;
    }
  }

  ul:hover {
    svg {
      fill: var(--second-hover-color)
    }
  }

  @media(min-width: 650px) {
    margin-top: 0px;
  }
`