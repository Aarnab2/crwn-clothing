import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100
    const publishableKey = "pk_test_51J4iNpSHukonom3EWeuttAxA1LnE1XVS03qVB4U8wzrxgUmxt3PxMJ7sQD1UFeCNNHAJUSoZJOur1MLmeOUbDgjx00nkyegFyt"
    
    const onToken = (token)=>{
    console.log(token)
    alert('Payment Successful')
    }
    
    return <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
}

export default StripeCheckoutButton