import styled from 'styled-components'

export const DivCard = styled.div`
  height: 300px;
  width: 230px;
  border-radius: 15px;
  border:2px solid var(--second-color);

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg:hover {
    transform: scale(1.4)
  }
  
  .remove {
    fill: red;
  }
  
  img {
    width: 100%;
    height: 70%;
  }
`

export const DivExtra = styled.div`
  height: 10%;
  width: 100%;
  padding-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around
`