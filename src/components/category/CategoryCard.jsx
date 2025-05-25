import React from 'react'
import {Link} from 'react-router-dom'
import classes from './category.module.css'
function CategoryCard({data: {name, title, imgLink}}) {
  return (
    <div className={classes.category}>
      
        <Link to={`/category/${name}`}>
            <span>
                <h2>{title}</h2>
            </span>
            <img src={imgLink} alt="" />
            <p>shoto show</p>
        </Link>
    </div>
  )
}

export default CategoryCard
