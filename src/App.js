import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter';


//// ESTE CODIGO ES JSX ////////

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenido' />
      <Counter initial={0} stock={15}/>
    </div>
  );
}



export default App;
