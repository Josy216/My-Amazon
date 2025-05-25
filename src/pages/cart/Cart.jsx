import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'
import SingleProduct from '../../components/single/SingleProduct'
import Currency from '../../components/currency/Currency'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'
import { Type } from '../../utils/Utility'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Cart() {
  
  const [{basket, user}, dispatch]= useContext(DataContext)
const total = basket.reduce((amount, item)=>{
return item.price * item.amount + amount
}, 0)

const increament = ()=>{
  dispatch({
    type: Type.AddToBasket,
    item
  })
}


const decreament = (id)=>{
  dispatch({
    type: Type.RemoveFromBasket,
    id
  })
}




  return (
    <Layout>
      <section className={styles.cont}>
        <div className={styles.cards}>
          <h2>Hello</h2>
          <h3>Your Shoping Basket</h3>
          <hr />
          {
            basket?.length==0?(<p>oops! no item added</p>):
            (
              basket?.map((item, index)=>{
                return <section className={styles.cartProduct}>
                  <SingleProduct 
                key={index}
                products={item}
                renderDesc={true}
                flex={true}
                />
                <div className={styles.btncont}>
                  <button onClick={()=>increament(item)}><IoIosArrowUp size={30}/></button>
                  <span>{item.amount}</span>
                  <button onClick={()=>decreament(item.id)}><IoIosArrowDown size={30}/></button>
                </div>
                </section>
              })
            )
          }
        </div>
        {
          basket?.length!==0&&(
            <div className={styles.subtotal}>
              <div>
                <p>subtotal ({basket?.length} item)</p>
                <Currency amount={total}/>
              </div>
              <span>
                <input type="checkbox" />
                <small>This order conatins a gift</small>
              </span>
              <Link to={'/payment'}>
              continue to checkout
              </Link>
            </div>
          )
        }
      </section>
    </Layout>
  )
}

export default Cart
