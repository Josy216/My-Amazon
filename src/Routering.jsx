import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPages from './pages/LandingPages'
import Signup from './pages/auth/Signup'
import Payment from './pages/payment/Payment'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Result from './pages/result/Result'
import ProductDetails from './pages/product/ProductDetails'


function Routering() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Payment" element={<Payment />} />
    <Route path="/Orders" element={<Order />} />
    <Route path="/category/:categoryname" element={<Result />} />
    <Route path="/products/:productid" element={<ProductDetails />} />
    <Route path="/Cart" element={<Cart />} />
    </Routes>
    </Router>
  )
}

export default Routering
