import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//// ESTE CODIGO ES JSX ////////

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= { <ItemListContainer /> } />
          <Route path='/category/:categoryId' element= { <ItemListContainer /> } />
          <Route path='/item/:itemId' element= { <ItemDetailsContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
