import './Square.css';

function Square({ playerSymbol, onSquareClick }) {
  return (
    <div
      className="square"
      style={{
        cursor: playerSymbol ? 'default' : 'pointer',
      }}
      onClick={onSquareClick}
    >
      <span>{playerSymbol}</span>
    </div>
  );
}

export default Square;
