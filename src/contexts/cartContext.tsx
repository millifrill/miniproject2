import { Component, createContext } from 'react';
import { Product } from '../components/mockedProducts';
interface CartItem extends Product {
   quantity: number;
   subTotal: number;
   totalSum: number;
}
interface State {
   cart: CartItem[];
   total: number;
}
interface ContextValue extends State {
   addToCart: (product: Product) => void;
   removeCart: (product: Product) => void;
   removeItems: (product: Product) => void;
   subToTal: (cart: CartItem[]) => void;
}

export const CartContext = createContext<ContextValue>({
   total: 0,
   cart: [],
   addToCart: () => {},
   removeCart: () => {},
   removeItems: () => {},
   subToTal: () => {},
});

class CartProvider extends Component<{}, State> {
   state: State = {
      cart: [],
      total: 0,
   };
   
   subTotal = (cart: CartItem[]) => {
      let totalup = 0;
      cart.forEach((element) => {
         totalup += element.subTotal;
      });
      this.setState({ total: totalup });
   };

   removeOneitem = (product: Product) => {
      let updatedCart = [...this.state.cart];

      const removeOne = updatedCart.find((item) => item.id === product.id);

      if (removeOne) {
         removeOne.quantity--;
         removeOne.subTotal -= removeOne.price;
         removeOne.totalSum -= removeOne.price;
         if (removeOne.quantity <= 0) {
            this.removeTocart(product);
         } else {
            this.setState({ cart: updatedCart });
            this.subTotal(updatedCart);
         }
      }
   };

   removeTocart = (product: Product) => {
      const removeItems: CartItem[] = this.state.cart.filter(
         (item) => item.id !== product.id,
      );

      this.setState({ cart: [...removeItems] });
      this.subTotal(removeItems);
   };

   addProductToCart = (product: Product) => {
      let updatedCart = [...this.state.cart];

      const itemInCart = updatedCart.find((item) => item.id === product.id);

      if (itemInCart) {
         itemInCart.quantity++;
         itemInCart.subTotal += itemInCart.price;
         itemInCart.totalSum += itemInCart.price;
      } else {
         updatedCart = [
            ...updatedCart,
            {
               ...product,
               quantity: 1,
               subTotal: product.price,
               totalSum: product.price,
            },
         ];
      }
      this.setState({ cart: updatedCart });
      this.subTotal(updatedCart);
   };

   render() {
      console.log('CONTEXT RENDER');
      return (
         <CartContext.Provider
            value={{
               total: this.state.total,
               cart: this.state.cart,
               addToCart: this.addProductToCart,
               removeCart: this.removeTocart,
               removeItems: this.removeOneitem,
               subToTal: this.subTotal,
            }}
         >
            {this.props.children}
         </CartContext.Provider>
      );
   }
}

export default CartProvider;
