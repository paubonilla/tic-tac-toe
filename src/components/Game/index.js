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

export const ImageStyle = styled.div`
  position: relative;
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  right: 0;
  pointer-events: none;
`

export const TheOffice = styled.div`
  > p {
    font-size: 80px;
    @media (max-width: 480px) {
      font-size: 70px;
    }
    @media (max-width: 320px) {
      font-size: 60px;
    }
    color: #fff;
    text-shadow: 1px 1px black;
    font-family: 'Special Elite', cursive;
  }
`