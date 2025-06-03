import React, { useReducer } from 'react'
import Header from './components/Header/Header'
import CarouselEffect from './components/Courosel/img/CarouselEffect'
import Category from './components/category/Category'
import Product from './components/single/product'
import Routering from './Routering'

function App() {
  let reducer = (state, action)=>{
    console.log(action);
    
    switch(action.type){
      case 'increase':
        return {count: state.count + 1};
      case 'decrease':
        return {count: state.count - 1};
      case 'reset':
        return {count: 0};
      }
    };
    const [state, dispatch]=useReducer(reducer, {count:0})

  return (
    // <Routering />
    <div>
      <h1>Count : {state.count}</h1>
      
    <button onClick={()=>dispatch({type: 'increase'})}>Increase</button>
    <button onClick={()=>dispatch({type: 'decrease'})}>Decrease</button>
    <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}
export default App
//fakestoreapi.com/product/