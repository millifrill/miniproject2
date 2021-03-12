import React, { Component, CSSProperties,  } from 'react';
import Footer from './Footer'
interface Props {
    
}

interface State {}

export default class Layout extends Component<Props, State> {

    render() {
        return (
            <div>
                <header/>
            </div>
        );
    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}
