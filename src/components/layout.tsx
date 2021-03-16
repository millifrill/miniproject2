import React, { Component, CSSProperties,  } from 'react';
import Footer from './Footer'
import SearchAppBar from './header'

interface Props {
    
}

interface State {}

export default class Layout extends Component<Props, State> {

    render() {
        return (
            <div>
                <SearchAppBar/>
                <Footer/>
            </div>
        );
    }
}
