import React, { useState } from 'react'
import Square from './Square'
import { calculateWinner } from '../winner'
import styled from 'styled-components'

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
  }
`

export default function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const handleClick = (i) => {
    const squares = [...boardSquares]
    if (calculateWinner(boardSquares) || squares[i]) return
    squares[i] = xIsNext ? "X" : "O"
    setBoardSquares(squares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={boardSquares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  let status
  const winner = calculateWinner(boardSquares)
  status = winner
    ? `${winner} wins the game`
    : `${xIsNext ? "Dwight" : "Michael"}'s turn`


  return (
    <BoardContainer>
      <div>{status}</div>
      <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </BoardContainer>
  )
}
