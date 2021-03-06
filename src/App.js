import React , {useEffect} from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch , Route , Redirect } from 'react-router-dom' 
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
//import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import {connect} from 'react-redux'
//import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector'
//import {selectCollectionsForPreview} from './redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'
import { checkUserSession } from './redux/user/user.actions';
// const HatsPage = (props)=>{
//   console.log(props)
//   return <div>
//     <h1>HATS PAGE</h1>
//   </div>
// }

const App = ({checkUserSession , currentUser})=> {
  // constructor(){
  //   super();
  //   this.state = {
  //   currentUser:null
  //   }
  // }

 //unsubscribeFromAuth = null;

useEffect(()=>{
  checkUserSession()
},[checkUserSession])

// componentDidMount(){
// const {checkUserSession} = this.props
// checkUserSession()
//   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth)=>{
// if(userAuth){
// const userRef = await createUserProfileDocument(userAuth)
// userRef.onSnapshot((snapshot)=>{
//  console.log('Snapshot--- ',snapshot) 
// //  this.setState({currentUser:{
// //   id:snapshot.id,
// //   ...snapshot.data() 
// //  }},()=>{console.log('State--- ',this.state)})
// this.props.setCurrentUser({
//   id:snapshot.id,
//   ...snapshot.data() 
// })
// })
//   }
//   // this.setState({currentUser:userAuth})
//   this.props.setCurrentUser(userAuth)
// //addCollectionAndDocuments('collections',this.props.collectionsArray.map(({title , items}) => ({title,items})))
//   }
//   )
//}

// componentWillUnmount(){
//   this.unsubscribeFromAuth()
// }

 
    return (
      <div>
        <Header ></Header>
        <Switch>
        <Route  exact path='/' component={HomePage}></Route>
        <Route  path='/shop' component={ShopPage}></Route>
        <Route  path='/checkout' component={CheckoutPage}></Route>
        {/* <Route  path='/signin' component={SignInAndSignUpPage}></Route> */}
        <Route  path='/signin' render = { () => {return currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}}></Route> 
        </Switch>
  
      </div>
    );
  
  
}

// const mapStateToProps = state =>{
//   return{
//     currentUser:state.user.currentUser
//   }
// }
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
    //collectionsArray:selectCollectionsForPreview
  }
)

const mapDispatchToProps = dispatch => {
  return {
    //setCurrentUser: user=> dispatch(setCurrentUser(user))
    checkUserSession: ()=> dispatch(checkUserSession())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
