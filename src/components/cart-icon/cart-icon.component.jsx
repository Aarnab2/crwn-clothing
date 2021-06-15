import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggelCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggelCartHidden , itemCount})=>(
    <div className='cart-icon' onClick={toggelCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{itemCount}
        </span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
toggelCartHidden: ()=> dispatch(toggelCartHidden())
})

// const mapStateToProps = (state) => {
//     return {
//         itemCount: state.cart.cartItems.reduce((accumulate,cartItem)=> accumulate+cartItem.quantity,0)
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         itemCount: selectCartItemsCount(state)
//     }
// }
const mapStateToProps = createStructuredSelector( {
        itemCount: selectCartItemsCount
    }
    )

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);