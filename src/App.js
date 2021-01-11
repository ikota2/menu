import React from "react";
import "./App.css";
import { Menu } from "./Menu/Menu.js";
import data from "./data.json";

function App() {
  return (
    <div className='App'>
      <Menu ids={data.topLevelIds} pages={data.entities.pages} />
    </div>
  );
}

export default App;
