export function calculateWinner(squares) {
  // get our set of the winner
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  // loop through this set
  for (let i = 0; i < winningLines.length; i++) {
    // check to see is the value in square array fulfill the winner
    const [a, b, c] = winningLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // is so, it will return either X or O
      return squares[a];
    }
  }
  // else, return nothing
  return null;
}
