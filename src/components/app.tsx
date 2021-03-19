// import React from 'react';
import Layout from './layout';
import { Product } from './mockedProducts';
import beata from './src/assets/images/boll/beata.jpg'


// Types
export interface CartItemType extends Product {
   quantity: number;
};

// interface Props {
//     image: string;
//  }

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


