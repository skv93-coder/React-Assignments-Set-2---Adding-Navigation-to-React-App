import React, {Component, useState} from "react";
import '../styles/App.css';

import { BrowserRouter as Router, Link, Route, Switch,useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import LocationDisplay from "./locationDisplay";
import NoMatch from "./noMatch";


export {LocationDisplay,Home,About,NoMatch};

class App extends Component {
    render() {

        return(
            <div id="main">
               
               <Router>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Switch>
                      <Route path='/' exact component ={Home}/>
                      <Route path='/about' exact component = {About}/>
                      <Route component={NoMatch} />
                  </Switch>
                  <LocationDisplay/>
               </Router>
            </div>
        )
    }
}

export default App;
