import styled from 'styled-components'

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