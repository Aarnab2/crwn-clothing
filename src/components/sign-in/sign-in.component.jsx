import React from 'react'
import { connect } from 'react-redux'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
//import {auth , signInWithGoogle} from '../../firebase/firebase.utils'
import { googleSignInStart , emailSignInStart } from '../../redux/user/user.actions'


class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

handleSubmit = async event => {
event.preventDefault();
const {email , password} = this.state
const {emailSignInStart} = this.props
emailSignInStart(email , password)
// try{
// await auth.signInWithEmailAndPassword(email,password)
// this.setState({email:'',password:''})
// }catch(e){
// console.log('Error--- ',e)
// }
}

handleChange = event => {
    const {name,value} = event.target
    this.setState({[name]:value})
}

    render(){
    return (<div className='sign-in'>
    <h2>I already have an account </h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={this.handleSubmit}>
        <FormInput name='email' type='email' label='email' handleChange={this.handleChange} value={this.state.email} required></FormInput>
        <FormInput name='password' type='password' label='password' handleChange={this.handleChange} value={this.state.password} required></FormInput>
        <div className='buttons'>
        <CustomButton  type='submit'>Sign in</CustomButton> 
        <CustomButton type='button' onClick={this.props.googleSignInStart} isGoogleSignIn>Sign in with google</CustomButton>
        </div>
    </form>
    
        </div>
    )
    }
}
 
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email , password) => dispatch(emailSignInStart({email:email , password:password}))
  });
  

export default connect(null , mapDispatchToProps)(SignIn);