import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Home, Cart } from './pages'
import { Header } from './components'



function App() {
  
  return (
    <div className="wrapper">

      <Header />

      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App