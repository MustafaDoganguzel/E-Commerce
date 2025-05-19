import { useState } from 'react'

import HomePage from './pages/HomePage'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <PageContent />
      <HomePage />
      <Footer />

    </>
  )
}

export default App
