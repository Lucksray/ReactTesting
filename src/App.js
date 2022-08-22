import logo from './logo.svg';
import './App.css';

const name = "Whon Jick";
const element = <h1>Welcome, {name}</h1>
function greeting(){
    document.getElementById("body--centre").textContent=element;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="body--centre">
          This should be replaced when this <button id="Bbutton">button</button> is pressed
        </p>
      </header>
    </div>
  );
}

document.getElementById("Bbutton").addEventListner("Bbutton", greeting);

export default App;
