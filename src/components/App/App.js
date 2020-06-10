import React from 'react'
import './App.scss'
import Navbar from '../Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Books from '../page/Books/Books'
import CartPage from '../page/Cart-page/CartPage'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/cart' component={CartPage}/>
        <Route path='/' exact component={Books}/>
      </Switch>
    </div>
  )
}

export default App
