import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbarr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Cart></Cart>          
            <Routes>
              <Route path='/' element= { <ItemListContainer /> } />
              <Route path='/category/:categoryId' element= { <ItemListContainer /> } />
              <Route path='/item/:itemId' element= { <ItemDetailsContainer /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/login' element={ <Login /> } />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}



export default App;
