import Square from '../square/square';
import './Board.css';

function Board({ actualSquares, onPlay, isPlayerX }) {
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function checkDrawResult(squares = []) {
    return !squares.filter((player) => player === null).length;
  }

  function handleClick(index) {
    if (
      calculateWinner(actualSquares) ||
      checkDrawResult(actualSquares) ||
      actualSquares[index]
    ) {
      return;
    }

    const newSquare = actualSquares.slice();
    newSquare[index] = isPlayerX ? 'X' : 'O';
    onPlay(newSquare);
  }

  const winner = calculateWinner(actualSquares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (checkDrawResult(actualSquares)) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (isPlayerX ? 'X' : 'O');
  }

  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square
            playerSymbol={actualSquares[0]}
            onSquareClick={() => handleClick(0)}
          ></Square>
          <Square
            playerSymbol={actualSquares[1]}
            onSquareClick={() => handleClick(1)}
          ></Square>
          <Square
            playerSymbol={actualSquares[2]}
            onSquareClick={() => handleClick(2)}
          ></Square>
        </div>
        <div className="board-row">
          <Square
            playerSymbol={actualSquares[3]}
            onSquareClick={() => handleClick(3)}
          ></Square>
          <Square
            playerSymbol={actualSquares[4]}
            onSquareClick={() => handleClick(4)}
          ></Square>
          <Square
            playerSymbol={actualSquares[5]}
            onSquareClick={() => handleClick(5)}
          ></Square>
        </div>
        <div className="board-row">
          <Square
            playerSymbol={actualSquares[6]}
            onSquareClick={() => handleClick(6)}
          ></Square>
          <Square
            playerSymbol={actualSquares[7]}
            onSquareClick={() => handleClick(7)}
          ></Square>
          <Square
            playerSymbol={actualSquares[8]}
            onSquareClick={() => handleClick(8)}
          ></Square>
        </div>
      </div>
    </>
  );
}

export default Board;
