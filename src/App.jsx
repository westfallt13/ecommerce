import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <BrowserRouter>
      <NavBar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products onAddToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App