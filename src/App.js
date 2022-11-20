import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


//// ESTE CODIGO ES JSX ////////

function App() {
  return (
    <div className="App">
      <img src='../public/images/logoiphnicius.jpg' alt='logo'></img>
      <Navbar />
      <ItemListContainer greeting='Bienvenido' />
    </div>
  );
}



export default App;
