import React from "react";
import './App.css';
import Home from './Home';
import About from './About';
import ViewEdit from './ViewEdit';
import Login from './auth/Login';
import Register from './auth/Register';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/viewedit" component={ViewEdit} />
    



    </div>
  );
}

export default App;
