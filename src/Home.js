import React from 'react'
import logo from './Screen Shot 2021-02-18 at 1.12.53 PM.png';
import './Home';
import Button from 'react-bootstrap/Button';

function Home(){
return (
<div>
<Button variant="link">Link</Button>
<h1> Stratum (Alpha) V 0.01</h1>
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
</header>

</div>
);
}

export default Home;
