import { Component, CSSProperties } from 'react';
import ProductGrid from './productGrid';
import karusell from '../../assets/images/karusell/karusell.jpg';

interface Props {
   // image: string;
}

interface State {}

const viewHeigt: CSSProperties = {
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
         <div style={viewHeigt}>
            <img src={karusell} alt="dahlia" width="auto" height="400" />
            <ProductGrid />
         </div>
      );
   }
}
