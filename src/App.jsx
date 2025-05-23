import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <Header />
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      <Footer />
    </>

  )
}

export default App
