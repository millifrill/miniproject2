import { Component, createContext } from 'react';
import { Product, products, } from '../components/mockedProducts';

interface CartItem extends Product {
   quantity: number
   
}

interface State {
   cart: CartItem[];
}

interface ContextValue extends State {
   addToCart: (product: Product) => void;
}


export const CartContext = createContext<ContextValue>({
   cart: [],
   addToCart: () => {},
   
});

class CartProvider extends Component<{}, State> {
   state: State = {
      cart: [],
   };
   remvoeTocart(product: Product) {
      

      //hitt en produckt quntiny -1 
   }
   addProductToCart = (product: Product) => {
      let updatedCart = [...this.state.cart];
      
      const itemInCart = updatedCart.find((item) => item.id === product.id);

      if (itemInCart) {
         //Höja upp quantity
         itemInCart.quantity++
      } else {
         updatedCart =[...updatedCart, { ...product, quantity: 1}]
         //Lägg till produkt med quantity 1
      }

      this.setState({ cart: updatedCart });
   };

   render() {
      console.log('CONTEXT RENDER');
      return (
         <CartContext.Provider
            value={{
               cart: this.state.cart,
               addToCart: this.addProductToCart,
               
            }}
         >
            {this.props.children}
         </CartContext.Provider>
      );
   }
}

export default CartProvider;
