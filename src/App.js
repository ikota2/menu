import React from "react";
import "./App.css";
import { Menu } from "./Menu/Menu.js";
import data from "./data.json";
import { Context } from "./Context";

function App() {
  console.log(data);
  return (
    <div className='App'>
      <Context.Provider value={data.entities.pages}>
        <Menu ids={data.topLevelIds} />
      </Context.Provider>
    </div>
  );
}

export default App;
