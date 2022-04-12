import logo from './logo.svg';
import map from './map.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      { /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */ }
      <img src={map} className="lmao" alt="Risk map" style={{height: '100vh', pointerEvents: "none", userSelect: "none"}} />
    </div>
  );
}

export default App;
