import logo from '../logo.svg';
import './header.css';

function header() {
  return (
      <header className="App-header ">
        <img src={logo} className="disable-select App-logo" alt="logo" />
        <p className="bg-opacity-75 bg-dark rounded p-4">
          T-21 TASK project
        </p>
      </header>
  );
}

export default header;
