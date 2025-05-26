import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import Currency from '../currency/Currency'
import classes from './Single.module.css'
import { Link } from 'react-router-dom'
import {DataContext} from '../../components/DataProvider/DataProvider'
import {Type} from '../../utils/Utility' 
// import { product } from '../category/data'

function SingleProduct({products,  flex,renderDesc, renderAdd, cartclass}) {
  const {image,id, title,description, rating, price }= products;
  
  const [_, dispatch]= useContext(DataContext)
  const addToCart = ()=>{
    dispatch({
      type:Type.AddToBasket,
      item:{
        image, id, rating, price, description
      }
    })
  }
  return (
    // classes.cartclass? cartclass: 
    <div className={`${cartclass?classes.cartclass:classes.cont} ${flex?classes.flexed:''}`} >
      <Link to={`/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc&&<div style={{maxWidth:'750px'}}>{description}</div>}
        <div className={classes.rate}>
            <Rating value={rating?.rate} precision={0.1}/>
            <small>{rating?.count}</small>
        </div>
        <div className={classes.price}>
            <Currency  amount={price}/>
        </div>
        {renderAdd&&
        <button className={classes.btn} onClick={addToCart}>
            Add to cart
        </button>
        }
      </div>
    </div>
  )
}

export default SingleProduct
