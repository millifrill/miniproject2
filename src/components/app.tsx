// import React from 'react';
import Layout from './layout';

// Types
export type CartItemType = {
   id: number;
   category: string;
   title: string;
   image: string;
   description: string;
   price: number;
   quantity: number;
};

const getTotalItems = () => null;

const handleAddToCart = (clickedItem: CartItemType) => null;

const handleRemoveFromCart = () => null; 

function App() {
   return(
       <div>
           <Layout />
       </div>
   );
}

export default App;


