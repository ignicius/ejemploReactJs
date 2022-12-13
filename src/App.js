import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemList from './components/ItemList/ItemList';

//// ESTE CODIGO ES JSX ////////

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      {/* <ItemList /> */}
    </div>
  );
}



export default App;
