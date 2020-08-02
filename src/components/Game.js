import React from 'react'
import Board from './Board'
import styled from 'styled-components'

export const BoardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoardInner = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Game() {
  return (
    <BoardContainer>
      <BoardInner>
        <Board />
      </BoardInner>
    </BoardContainer>
  )
}
