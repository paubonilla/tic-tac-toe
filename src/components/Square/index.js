import styled from 'styled-components'

export const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  @media (max-width: 320px) {
    width: 85px;
    height: 85px;
  }
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
  &:hover {
    background: #BADAC4;
  }
`