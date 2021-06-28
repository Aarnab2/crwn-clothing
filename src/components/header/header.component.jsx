import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'
import { HeaderContainer , LogoContainer , OptionsContainer , OptionLink } from './header.styles' 

const Header = ({ currentUser , hidden })=>{
return <HeaderContainer>
<LogoContainer to='/'>
<Logo className='logo'></Logo>
</LogoContainer>
<OptionsContainer>
<OptionLink to='/shop'>
SHOP
</OptionLink>
<OptionLink to='/contact'>
CONTACT
</OptionLink>
{
currentUser?
<OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
:
<OptionLink to='/signin'>SIGN IN</OptionLink>
}
<CartIcon/>
</OptionsContainer>
{
hidden?null:<CartDropdown/>
}
</HeaderContainer>
}

// const mapStateToProps = (state)=>{
// return {
//     currentUser:state.user.currentUser,
//     hidden:state.cart.hidden
// }
// }

// const mapStateToProps = (state)=>{
//     return {
//         currentUser:selectCurrentUser(state), 
//         hidden:selectCartHidden(state)
//     }
//     }

const mapStateToProps = createStructuredSelector( 
    {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
   
    

export default connect(mapStateToProps)(Header)