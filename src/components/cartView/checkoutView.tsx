import React, { CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import CartView from './cartView';
import AddressForm from './adressForm';
import PaymentForm from './paymentForm';


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
               <Route path="/cart" component={CartView} />
               <Route path="/adress" component={AddressForm} />
               <Route path="/pay" component={PaymentForm} />
               <p>404 sidan finns inte...</p>
            </Switch>
         </div>
      );
}
