import React from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import { setPizzas } from './redux/actions/pizzas'

import { Home, Cart } from './pages'
import { Header } from './components'


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    return (
      <div className="wrapper">

        <Header />

        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home items={this.props.items} />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    )
  }
}




// function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas)
//     })
//   }, [])


//   return (
//     <div className="wrapper">

//       <Header />

//       <div className="content">
//         <Routes>
//           <Route exact path='/' element={<Home items={pizzas} />} />
//           <Route exact path='/cart' element={<Cart />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
}


const mapDispatchToProps = {
  setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);