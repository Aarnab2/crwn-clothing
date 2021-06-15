import {CartActionTypes} from './cart.types'

export const toggelCartHidden = ()=>{
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  }  
}