import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/Services' exact component={Services}/>
          <Route path='/sign-up' exact component={SignUp}/>
          <Route path='/Products' exact component={Products}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
