import { CSSProperties } from 'react';
// import { Product } from '../mockedProducts';
import CartView from './cartView';

// interface Props {
//      products: Product;
//     handleAddToCart: (products: Product) => void;
// }
// interface State {}

const rootStyle: CSSProperties = {
   minHeight: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   margin: '2rem',
};

export default function checkoutView() {
      return (
         <div style={rootStyle}>
            <CartView />
         </div>
      );
}
