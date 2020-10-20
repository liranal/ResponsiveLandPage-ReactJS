import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch></Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
