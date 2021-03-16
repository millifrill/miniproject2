import React, { Component, CSSProperties,  } from 'react';
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
                <StartPageView/>
                <Footer/>
            </div>
        );
    }
}
