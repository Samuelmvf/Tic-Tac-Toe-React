import './RedoButton.css';

function RedoButton({ movement, moveTo }) {
  return (
    <>
      <button onClick={() => moveTo(movement - 1)}>
        {'Go to ' + (movement === 0 ? 'start' : `move #${movement + 1}`)}
      </button>
    </>
  );
}

export default RedoButton;
