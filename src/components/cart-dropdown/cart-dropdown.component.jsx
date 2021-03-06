import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router'
import {toggelCartHidden} from '../../redux/cart/cart.actions'
const CartDropdown = ({cartItems , history , toggelCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        { cartItems.length?
        cartItems.map((cartItem)=> <CartItem key={cartItem.id} item={cartItem}></CartItem>)
        :<span className='empty-message'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={()=>{history.push('/checkout');toggelCartHidden()}}>GO TO CHECKOUT</CustomButton>
    </div>
)

// const mapStateToProps = (state) => {
//  return {
//     cartItems: state.cart.cartItems
// }
// }

// const mapStateToProps = (state) => {
//     return {
//        cartItems: selectCartItems(state)
//    }
//    }

const mapStateToProps = createStructuredSelector({
       cartItems: selectCartItems
   }
)

const mapDispatchToProps = (dispatch)=>({
    toggelCartHidden: ()=>dispatch(toggelCartHidden())
} 
)

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));