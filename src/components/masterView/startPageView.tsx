import { Component, CSSProperties } from 'react';
import ProductGrid from './productGrid';
// import dahliaCollage from '/assets/dahliaCollage.jpg';

interface Props {}

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
            <img
               src="karusell.jpg" // https://live.staticflickr.com/3709/9539174347_6f760cfa7e_b.jpg
               alt="dahlia"
               width="300"
               height="400"
            ></img>
            <ProductGrid />
         </div>
      );
   }
}
