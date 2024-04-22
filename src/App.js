import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter/Counter";
import String from "./components/string/String";

function App() {
  return (
    <div className="App">
{/*      <header className="App-header">
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
      </header>*/}
      {/*<MyButton></MyButton>*/}
      {/*<Counter></Counter>*/}
      <String></String>
    </div>
  );
}

function MyButton() {
  return (
      <button>I'm a button</button>
  );
}

export default App;
