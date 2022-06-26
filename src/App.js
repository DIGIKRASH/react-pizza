import React from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import { Home, Cart } from './pages'
import { Header } from './components'

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })
  }, [])


  return (
    <div className="wrapper">

      <Header />

      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home items={pizzas} />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// <Routes>
// <Route exact path='/' element={<App />} />
// <Route exact path='/qq' element={<Header />} />
// </Routes>