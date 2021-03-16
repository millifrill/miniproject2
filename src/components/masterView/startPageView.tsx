import { Component, CSSProperties } from 'react';

interface Props {
    
}

interface State {}

const viewHeigt: CSSProperties ={
    minHeight:'100vh',
  }

export default class StartPageView extends Component<Props, State> {

    render() {
        return (
            <div style= {viewHeigt}>

            </div>
        );
    }
}