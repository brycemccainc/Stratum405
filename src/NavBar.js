import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
  return(
    <ul>
      <li>
      <Link to="/login">Login</Link>
      </li>
      <li>
      <Link to="/register">Register</Link>
      </li>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/viewedit">ViewEdit</Link>
      </li>
      
    </ul>
  );

}

export default NavBar;
