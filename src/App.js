import React from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { setPizzas } from './redux/actions/pizzas'

import { Home, Cart } from './pages'
import { Header } from './components'



function App() {
  const dispatch = useDispatch()
  

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])


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