import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </StylesProvider>
  );
}

export default App;
