
import './App.css';
import React, { useState } from 'react';
import { DISHES } from './shared/dishes';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';


function App() {
  const [dishes] = useState(DISHES);

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Risotarante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

 export default App;
