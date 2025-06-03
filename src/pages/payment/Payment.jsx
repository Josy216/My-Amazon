import React, { useContext, useState } from 'react';
import Layout from '../../components/layout/Layout';
import classes from './payment.module.css';
import { DataContext } from '../../components/DataProvider/DataProvider';
import SingleProduct from '../../components/single/SingleProduct';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Currency from '../../components/currency/Currency';
import { PropagateLoader } from 'react-spinners'
import axiosInstance from '../../Api/Axios';
import { db } from '../../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../utils/Utility';

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const stripe = useStripe();
  const elements = useElements();

const navigator = useNavigate();
  
const total = basket.reduce((amount, item)=>{
return item.price * item.amount + amount
}, 0)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      setLoading(true);
      const response = await axiosInstance({
        method: 'post',
        url: `/payment/create?total=${total * 100}`, // Convert to cents
      });
      const clientSecret = response.data?.clientSecret;
      console.log("Payment Intent created:", response.data);


      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log("Payment confirmation result:", paymentIntent);
      db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount / 100, // Convert back to dollars
        created: paymentIntent.created,
        paymentMethod: paymentIntent.payment_method,
      });


      // empty the basket after successful payment
      dispatch({
        type: Type.SetBasket,
        basket: [],
      });


      setLoading(false);
      navigator('/orders',{state: {msg: "You have placed new Item"}} );
    } catch (error) {
      console.error("Error creating Payment Intent:", error);
      setLoading(false);
    } 




    if (!stripe || !elements) {
      console.log("Stripe.js hasn't loaded yet.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error("Error creating payment method:", error);
    } else {
      console.log("PaymentMethod:", paymentMethod);
      // Handle successful payment method creation
    }
  };

  const [cardError, setCardError] = useState(null);

  const handlechange = (event) => {
    event?.error? setCardError(event.error.message) : setCardError(null);
  }


  return (
    <Layout>
      <div>
        <h3 className={classes.payment_header}>checkout ({totalItem}) items</h3>
      </div>
      <hr />
      <section className={classes.payment_section}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <p>John Doe</p>
            <p>{user?.email}</p>
            <p>123 Main St</p>
            <p>City, State, ZIP</p>
            <p>Country: Ethiopia</p>
          </div>
        </div>
        <hr />
        {/* Product */}
        <div className={classes.flex}>
          <h3>Review Item and Delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <SingleProduct key={index} products={item} cartclass={true} flex={true} renderAdd={true} renderDesc={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* Card */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment_card}>
            <form onSubmit={handleSubmit} className={classes.payment_form}>
              {cardError&& <small className={classes.card_error}>{cardError}</small>}
              <CardElement onChange={handlechange} />
              <div className={classes.payment_total}>
                <div>
                  <p style={{display : "flex", gap: "10px"}}>Total Order  |  <Currency  amount={total}/> </p>
  
                </div>
                <button type="submit" disabled={!stripe} className={classes.pay_btn}>
                  {<div className={classes.loader}>
                    {loading?(<><PropagateLoader color='gray' size={22} />
                    
                    </>): ("Pay Now")}
                    </div>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;