import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import productUrl from '../../Api/Api'
import SingleProduct from '../../components/single/SingleProduct'

function ProductDetails() {
  
  const {productid} = useParams()
  const [singleData, setSingleData]= useState([])
  
  useEffect(()=>{
    
    axios.get(`${productUrl}/products/${productid}`).then((res)=>{
      setSingleData(res.data)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])
  

  return (
    <Layout>
      {singleData && Object.keys(singleData).length > 0 && (
        <SingleProduct 
          products={singleData} 
          renderDesc={true} 
          renderAdd={true} 
          flex={true} 
          cartclass={true} 
        />
      ) 
      }  
    </Layout>
  )
}

export default ProductDetails
