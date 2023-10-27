import logo from './logo.svg';
import './App.css'

function App() {
  const testingEnvVariable = process.env.REACT_APP_TESTING_VARIABLE;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. App built every 15 minutes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {testingEnvVariable}
        </a>
      </header>
    </div>
  );
}

export default App;
