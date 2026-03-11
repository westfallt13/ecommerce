import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App