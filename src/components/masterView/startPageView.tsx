import { Component, CSSProperties } from 'react';
import ProductGrid from './productGrid';

interface Props {
}

interface State {}

const rootStyle: CSSProperties = {
   minHeight: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   margin: '2rem',
};

export default class StartPageView extends Component<Props, State> {
   render() {
      return (
         <div style={rootStyle}>
            <ProductGrid />
         </div>
      );
   }
}
