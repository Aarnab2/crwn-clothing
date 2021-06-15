import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggelCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggelCartHidden})=>(
    <div className='cart-icon' onClick={toggelCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
toggelCartHidden: ()=> dispatch(toggelCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);