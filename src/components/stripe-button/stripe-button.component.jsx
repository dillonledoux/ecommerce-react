import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const pubishableKey = 'pk_test_BGMW9EEkL9hTku5PvAkXTPsZ00xady8oah';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            name='CRWN Clothing Co.'
            currency='USD'
            label='Pay Now'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubishableKey}
        />
    );
};

export default StripeCheckoutButton;