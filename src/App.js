import React from "react"
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CountDown from "./Components/CountDown/CountDown";
import Home from "./Components/Home/Home";
import Quoter from "./Components/Quotes/Quotes";
// import Quotes from "./Components/Quotes/Quotes";
import StateMage from "./Components/StateManagenment/StateMage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quotes'exact component={Quoter} />
          <Route path='/statemage' exact component={StateMage} />
          <Route path='/countdown' exact component={CountDown} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
