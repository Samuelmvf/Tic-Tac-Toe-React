import { useState } from 'react';

import './Game.css';

import Board from '../board/board';
import RedoButton from '../redobutton/redobutton';

function Game() {
  const [playHistory, setPlayHistory] = useState([Array(9).fill(null)]);
  const [currentMovement, setCurrentMovement] = useState(0);

  const isPlayerX = currentMovement % 2 === 0;
  const actualBoardStatus = playHistory[playHistory.length - 1];

  const handlePlay = (newBoardStatus) => {
    const newHistoryRegister = [
      ...playHistory.slice(0, currentMovement + 1),
      newBoardStatus,
    ];

    setPlayHistory(newHistoryRegister);
    setCurrentMovement(newHistoryRegister.length - 1);
  };

  const moveTo = (movement) => {
    const newHistoryRegister = [...playHistory.slice(0, movement + 1)];
    setPlayHistory(newHistoryRegister);
    setCurrentMovement(movement);
  };

  let redoButtons = playHistory
    .map((square, move) => {
      return (
        <li key={move}>
          <RedoButton moveTo={() => moveTo(move)} movement={move}></RedoButton>
        </li>
      );
    })
    .splice(0, playHistory.length - 1);
  return (
    <>
      <div className="game-tittle">
        <h2>TicTacToe</h2>
      </div>
      <div className="game-body">
        <Board
          actualSquares={actualBoardStatus}
          onPlay={handlePlay}
          isPlayerX={isPlayerX}
        ></Board>
        <div className="redo-actions">
          {playHistory.length > 1 && <ol>{redoButtons}</ol>}
        </div>
      </div>
    </>
  );
}
export default Game;
