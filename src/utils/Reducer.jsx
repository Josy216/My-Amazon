
import {Type} from './Utility'
export const initialState = {
    basket: [],
    user: null
}
export const reducer = (state, action)=>{
    switch(action.type){
        case Type.AddToBasket:
            const existItem = state.basket.find((item)=>item.id === action.item.id)
            if(!existItem){
                return {
                ...state,
                basket: [...state.basket, {...action.item, amount : 1}]
            }}else{
                const updatedBasket = state.basket.map((item)=>{
                   return  item.id === action.item.id?{...item, amount:item.amount +1}:item
                })
                return {
                    ...state,
                    basket: updatedBasket
                }
            }
        case Type.RemoveFromBasket:
                const index = state.basket.findIndex(item=>item.id===action.id)
                let newBasket = [...state.basket]
                if(index>=0){
                    if(newBasket[index].amount>1){
                        newBasket[index]= {
                            ...newBasket[index],
                            amount:newBasket[index].amount-1
                        }
                    }else{
                        newBasket.splice(index, 1)
                    }
                }
                return {
                    ...state,
                    basket: newBasket
                }
        case Type.EmpityBasket:
                return {
                    ...state,
                    basket: []
                }
                case Type.SetUser:
                    return {
                        ...state,
                        user : action.user
                    }
            default: 
            return state;
    }

}


// const [state, dispatch]= useReducer(reducer, initialState)