import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSellers from './pages/BestSellers/BestSellers'
import Product from './pages/Products/Product'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <BestSellers />
    <Product />
    </>
  )
}

export default App