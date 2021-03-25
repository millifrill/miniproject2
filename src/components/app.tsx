import { BrowserRouter } from 'react-router-dom'
import Layout from './layout';
import { Product } from './mockedProducts';


// Types
export interface CartItemType extends Product {
   quantity: number;
}

//interface Props {
  // products: Product;
 //  handleAddToCart: (products: Product) => void;
//}

// const getTotalItems = () => null;

// const handleAddToCart = (clickedItem: CartItemType) => null;

// const handleRemoveFromCart = () => null;

function App() {
   return(
       <BrowserRouter>
           <Layout />
       </BrowserRouter>
   );
}

export default App;
