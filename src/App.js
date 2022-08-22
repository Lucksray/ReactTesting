import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="body--centre">
          This should be replaced when this <button className="Bbutton">button</button> is pressed
        </p>
      </header>
    </div>
  );
}

export default App;
