import React, { Component } from 'react';
import Header from './header';

interface Props {}

interface State {}

export default class Layout extends Component<Props, State> {

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}
