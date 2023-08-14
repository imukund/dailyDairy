//import logo from './logo.svg';
import './App.css';
//import Hello from './components/funtion';
//import New from './components/class';
//import Property from './components/funcprops';
//import State from './components/state';
import { Route,Routes } from 'react-router-dom';
import Hello from './components/function';
import Page from './components/home';
import Profile from './components/profile';
import Cart from './components/cart';
import Notification from './components/notification';
import Order from './components/order';
import { useState } from 'react';
function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default App;
