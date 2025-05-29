import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ProductCard from './components/ProductDetails'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
      <Header />
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>

      <Footer />
    </>

  )
}

export default App
