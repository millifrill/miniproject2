import { Component, CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import Copyright from './copyright';
import Header from './header';
import StartPageView from './masterView/startPageView';
import DetailedView from './detailedView/detailedView';
import checkoutView from './cartView/checkoutView';

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
               <p>404 sidan finns inte...</p>
            </Switch>
            <Copyright />
         </div>
      );
   }
}

const container: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   flexGrow: 1,
};
