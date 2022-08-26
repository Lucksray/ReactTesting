import logo from './logo.svg';
import './App.css';

import React from "react";
import Menu from "./Recipes/Menu";
import data from "./Recipes/data/recipes.json";
import Game from "./GameExample/game";
import Clicker from "./Clicker/clicker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="body--centre">
          This worlds a little broken, isn't it?
        </p>
      </header>
      
      <Menu recipes={data} />
    </div>
  );
}


export default App;