import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ProductDetails from './components/ProductDetails'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {


  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
