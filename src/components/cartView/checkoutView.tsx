import React, { CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import CartView from './cartView';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Checkout from './checkout';
import Review from './review';

interface Props {}
interface State {}

const rootStyle: CSSProperties = {
   minHeight: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   margin: '2rem',
};

export default function checkoutView() {
   return (
      <div style={rootStyle}>
         <Switch>
            <Route path="/checkout/checkout" component={Checkout} />
            <Route path="/checkout/kungvagn" component={CartView} />
            <Route path="/checkout/adress" component={AddressForm} />
            <Route path="/checkout/betala" component={PaymentForm} />
            <Route path="/checkout/orderoversikt" component={Review} />
            <p>404 sidan finns inte...</p>
         </Switch>
      </div>
   );
}
