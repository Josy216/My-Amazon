import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPages from './pages/LandingPages'
import Signup from './pages/auth/Signup'
import Payment from './pages/payment/Payment'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Result from './pages/result/Result'
import ProductDetails from './pages/product/ProductDetails'
import ProtectPayment from './components/protect/protectPayment'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51RUkWwPvUqYM9RKRFtnPSDnK4WnQbjaCWjhKdaAPsDDydxCvPSXTx4DVAdLcHRtqht6Cn0rMG1tw0PMauJNknCjM00lW27zrRA");

function Routering() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<LandingPages />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Payment" element={
      <ProtectPayment redirect="/Payment" msg="You need to login to make payment">
      <Elements stripe={stripePromise}>
        <Payment />
      </Elements>
      </ProtectPayment>
       } />
    <Route path="/Orders" element={
      <ProtectPayment redirect="/Orders" msg="You need to login to see your orders">
        <Order />
      </ProtectPayment>
    } />
    <Route path="/category/:categoryname" element={<Result />} />
    <Route path="/:productid" element={<ProductDetails />} />
    <Route path="/Cart" element={<Cart />} />
    </Routes>
    </Router>
  )
}

export default Routering
