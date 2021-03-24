import { CSSProperties } from 'react';
// import { Product } from '../mockedProducts';
import ProductContainer from './productContainer';

interface Props {
    //   products: Product;
    //   handleAddToCart: (products: Product) => void;
}

interface State {}

const rootStyle: CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: '2rem',
 };

export default function DetailedView() {
      return (
         <div style={rootStyle}>
            <ProductContainer />
         </div>
      );
}
