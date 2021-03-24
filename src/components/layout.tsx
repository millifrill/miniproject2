import { Component, CSSProperties } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import StartPageView from './masterView/startPageView';
import DetailedView from './detailedView/detailedView';
import Cart from './cartView/cartContainer';

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
              <Route path= "/cart" component={Cart} />
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
    flex: 1,
}
