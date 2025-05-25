import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import classes from './Single.module.css'
import Loader from '../loader/Loader'

function Product() {
   const [isloading, setIsLoading] = useState(false);
    const [product, setProduct]= useState([])
    
    useEffect(()=>{
      setIsLoading(true);
        axios.get(`https://fakestoreapi.com/products`).then((res)=>{
            setProduct(res.data)
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
            
            
        })
        
    }, [])
  return isloading ? <Loader /> : (
    <div className={classes.product}>
      {
        product.map((singleData, index)=>{
            return <SingleProduct renderAdd={true}  products={singleData} key={index}/>
        })
      }
    </div>
  )
}

export default Product
