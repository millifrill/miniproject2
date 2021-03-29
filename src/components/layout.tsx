import { Component, CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import StartPageView from './masterView/startPageView';
import DetailedView from './detailedView/detailedView';
import checkoutView from './cartView/checkoutView';
import ShippingVeiw from './cartView/shippingView';
import AddressForm from './cartView/custumerInfoView';
import PaymentForm from './cartView/paymentView';


interface Props {}

interface State {}

export default class Layout extends Component<Props, State> {
   render() {
      return (
         <div style={container}>
            <Header />
            <Switch>
               <Route exact path="/" component={StartPageView} />
               <Route path="/produkt/:id" component={DetailedView} />
               <Route path="/checkout" component={checkoutView} />
               <Route path="/cart" component={CartView} />
               <Route path="/shippingView" component={ShippingVeiw}/>
               <Route path="/adress" component={AddressForm} />
               <Route path="/pay" component={PaymentForm} />
               <p>404 sidan finns inte...</p>
            </Switch>
            <Footer />
         </div>
      );
   }
}

const container: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   flexGrow: 1,
};
