import reactLogo from './assets/react.svg';
import './App.css';
import Game from './components/game/game';

function App() {
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>React</h1>
      <Game></Game>
    </>
  );
}

export default App;
