import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductContainer from './detailedView/produktContainer';
import Footer from './footer'
import Header from './header'
import StartPageView from './masterView/startPageView'

interface Props {
}

interface State {}

export default class Layout extends Component<Props, State> {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={StartPageView} />
                    <Route path="/produkt/:id" component={ProductContainer} />
                    <p>404 sidan finns inte...</p>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
