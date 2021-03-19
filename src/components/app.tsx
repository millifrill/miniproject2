import Layout from './layout';
import { Product } from './mockedProducts';
import beata from './src/assets/images/boll/beata.jpg'
import { BrowserRouter } from 'react-router-dom'


// Types
export interface CartItemType extends Product {
   quantity: number;
}

interface Props {
   products: Product;
   handleAddToCart: (products: Product) => void;
}

// const getTotalItems = () => null;

const handleAddToCart = (clickedItem: CartItemType) => null;

// const handleRemoveFromCart = () => null;

function App() {
   return(
       <BrowserRouter>
           <Layout />
       </BrowserRouter>
   );
}

export default App;
