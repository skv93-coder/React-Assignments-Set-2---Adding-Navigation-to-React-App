import React, {Component, useState} from "react";
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import About from "./about";
import Home from "./home";
class App extends Component {
    render() {

        return(
            <Router>
            <div id="main">
        
               {/* Do not remove the main div */}
            </div>
            <Switch>
            <Router path="/about" Component={About}/>
            <Router path="/" Component={Home}/>
            </Switch>
            </Router>
        )
    }
}


export default App;
