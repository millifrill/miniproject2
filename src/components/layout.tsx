import React, { Component } from 'react';
import Footer from './footer'
import Header from './header'
import StartPageView from './masterView/startPageView'

interface Props {
//   image: string;  
}

interface State {}

export default class Layout extends Component<Props, State> {

    render() {
        return (
            <div>
                <Header/>
                <StartPageView />
                <Footer/>
            </div>
        );
    }
}
