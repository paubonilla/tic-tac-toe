import React, { useState } from 'react'
import Square from './Square'
import { calculateWinner } from '../winner'
import { BoardContainer } from '../styled'
// import dwight from '../images/dwight.png'
// import michael from '../images/michael.png'

export default function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {
    const squares = [...boardSquares]
    const nextTurn = xIsNext
      ? "X" : "O"
    if (calculateWinner(boardSquares) || squares[i]) return
    squares[i] = nextTurn
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

  const renderRestartGame = () => {
    boardSquares.map((move) => {
      const restart = { move }
      return (
        <button onClick={() => restart(boardSquares)}>Restart</button>
      )
    })
  }

  let status
  let dwight
  const winner = calculateWinner(boardSquares)
  status = winner
    ? `${winner} wins the game`
    : `${xIsNext ? "Dwight" : "Michael"}'s turn`
  dwight = `${winner ? "Dwight you ignorant " : ""}`

  return (
    <>
      <BoardContainer>
        <div className="status">{status}</div>
        <div>{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
        <div>{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
        <div>{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
        <div>{renderRestartGame()}</div>
      </BoardContainer>
      <div className="ignorant">{dwight}</div>
    </>
  )
}
