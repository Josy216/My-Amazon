import React from 'react'
import classes from './category.module.css'
import { product } from './data'
import CategoryCard from './CategoryCard'
function Category() {
  return (
    <div className={classes.cont}>
        {
            product?.map((data, i)=>{
                return <CategoryCard key={i} data={data}/>
            })
        }
      
    </div>
  )
}

export default Category
