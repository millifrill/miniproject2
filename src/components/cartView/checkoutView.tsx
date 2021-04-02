import { Route, Switch } from 'react-router-dom';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Checkout from './checkout';
import OrderConfirmation from './orderConfirmation';
import ShippingView from './shippingView';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface Props {}

const CheckoutView: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className={classes.rootStyle}>
            <Switch>
                <Route path="/checkout/adress" component={AddressForm} />
                <Route path="/checkout/betala" component={PaymentForm} />
                <Route path="/checkout/frakt" component={ShippingView} />
                <Route path="/checkout/orderoversikt" component={OrderConfirmation} />
                <Route path="/checkout/checkout" component={Checkout} />
                <p className={classes.p}>404 sidan finns inte...</p>
            </Switch>
        </div>
    );
}

export default CheckoutView;

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
    rootStyle: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginBlockStart: '2rem',
      },
      p: {
         fontSize: '2rem',
         margin: 'auto',
      },
   }),
);
