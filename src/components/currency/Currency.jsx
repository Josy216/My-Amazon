import React from 'react'
import numeral from 'numeral'
const Currency = ({amount})=>{
    const formats = numeral(amount).format("$0,00,00")
    return(
    <div>{formats}</div>
    )
}
export  default Currency;