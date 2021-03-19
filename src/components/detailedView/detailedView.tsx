import { Component } from 'react';
import { Product } from '../mockedProducts';

interface Props {
   products: Product;
   handleAddToCart: (products: Product) => void;
}

interface State {}

export default class DetailedView extends Component<Props, State> {
   render() {
      return (
         <div>
            {/* <ProductContainer /> */}
         </div>
      );
   }
}
