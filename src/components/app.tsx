import { BrowserRouter } from 'react-router-dom';
import CartProvider from '../contexts/cartContext';
import Layout from './layout';
import { Product } from './mockedProducts';

// Types
export interface CartItemType extends Product {
   quantity: number;
}

function App() {
   return (
      <CartProvider>
         <BrowserRouter>
            <Layout />
         </BrowserRouter>
      </CartProvider>
   );
}

export default App;
