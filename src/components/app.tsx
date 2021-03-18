// import React from 'react';
import Layout from './layout';
import { Product } from './mockedProducts';

// Types
export interface CartItemType extends Product {
   quantity: number;
};

// const getTotalItems = () => null;

// const handleAddToCart = (clickedItem: CartItemType) => null;

// const handleRemoveFromCart = () => null; 

function App() {
   return(
       <div>
           <Layout />
       </div>
   );
}

export default App;


