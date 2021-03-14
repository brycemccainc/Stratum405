import React from "react";
import logo from './Screen Shot 2021-02-18 at 1.12.53 PM.png';
import './App.css';
import Home from './Home';
import About from './About';
import ViewEdit from './ViewEdit';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/viewedit" component={ViewEdit} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
