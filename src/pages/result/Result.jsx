import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import productUrl from '../../Api/Api'
import SingleProduct from '../../components/single/SingleProduct'
import Loader from '../../components/loader/Loader'

function Result() {
  const [isLoading, setIsLoading]= useState(false)
  const [getResult, setGetResult]= useState([])
  
  const categoryname= useParams().categoryname.toLocaleLowerCase();
  
  useEffect(()=>{
    setIsLoading(true)
    
  axios.get(`${productUrl}/products/category/${categoryname}`).then((res)=>{
    setGetResult(res.data)
    setIsLoading(false)
    
  }).catch((err)=>{
    console.log(err);
    setIsLoading(false)
    
  })
  }, [])
  
  return (

    <Layout>

      <div>
        <h1 style={{padding : "30px"}}>Results</h1>
        <p style={{padding : "30px"}}>Category /{categoryname}</p>
        <hr />

        {isLoading?(<Loader />):
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(270px, 1fr))',
          margin: '10px auto',
          gap:'20px',


        }}>
          
        {getResult?.map((results)=>{
          return( 
            <SingleProduct
            products = {results}
            renderAdd={true}
            
             />
        )})}
        </div>
}
      </div>
    </Layout>
  )
}

export default Result
