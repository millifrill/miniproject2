import { CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import CartView from './cartView';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Checkout from './checkout';
import Review from './review';
import ShippingView from './shippingView';

const rootStyle: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    marginBlockStart: '2rem',
};

export default function checkoutView() {
    return (
        <div style={rootStyle}>
            <Switch>
                <Route path="/checkout/kundvagn" component={CartView} />
                <Route path="/checkout/adress" component={AddressForm} />
                <Route path="/checkout/betala" component={PaymentForm} />
                <Route path="/checkout/frakt" component={ShippingView} />
                <Route path="/checkout/orderoversikt" component={Review} />
                <Route path="/checkout/checkout" component={Checkout} />
                <p>404 sidan finns inte...</p>
            </Switch>
        </div>
    );
}
