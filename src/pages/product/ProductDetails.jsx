import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
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
      <SingleProduct products={singleData} flex={true} cartclass={true} renderDesc={true} renderAdd={true}/>
    </Layout>
  )
}

export default ProductDetails
