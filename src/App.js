import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//// ESTE CODIGO ES JSX ////////

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}



export default App;
