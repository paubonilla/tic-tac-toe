import styled from 'styled-components'

export const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(#F8F9FD, #2997F1);
`

export const GameInner = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  max-width: 800px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
  }
  .status {
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-family: 'Special Elite', cursive;
    color: #F40804;
  }
`

export const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  margin: 2px;
  border: 1px solid #4a2908;
  border-radius: 0px;
  color: #173ef2;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Special Elite', cursive;
  background: #f6fe81;
  outline: none;
`