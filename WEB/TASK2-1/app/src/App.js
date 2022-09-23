import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <header className="App-header ">
        <img src={logo} className="disable-select App-logo" alt="logo" />
        <p class="bg-opacity-75 bg-dark rounded p-4">
          T-21 TASK project
        </p>
      </header>
  );
}

export default App;
