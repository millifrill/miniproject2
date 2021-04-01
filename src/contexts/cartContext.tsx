import { Component, createContext } from 'react';
import { Product } from '../components/mockedProducts';

interface CartItem extends Product {
   quantity: number
   
}

interface State {
   cart: CartItem[];
}

interface ContextValue extends State {
   addToCart: (product: Product) => void;
   remvoecart: (product: Product) => void;
   removeitems: (product: Product) => void;
}


export const CartContext = createContext<ContextValue>({
   cart: [],
   addToCart: () => {},
   remvoecart: () =>{},
   removeitems: () =>{},
});

class CartProvider extends Component<{}, State> {
   state: State = {
      cart: [],
   };
   removeOneitem= (product: Product) => {
      let updatedCart = [...this.state.cart];
      
      const removeOne = updatedCart.find((item) => item.id === product.id);
      
      if (removeOne) {
         //säker vädert
         removeOne.quantity-- ;
         if(removeOne.quantity <= 0){
            this.remvoeTocart(product)
         }else{
            this.setState({ cart: updatedCart });
         }
      }
   };
   remvoeTocart= (product: Product) => {
      const removeitems: CartItem[]= this.state.cart.filter((item)=> item.id !== product.id);
      this.setState({cart: [...removeitems]});
      //tar bort en hella produkten

   };
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
               remvoecart: this.remvoeTocart,
               removeitems: this.removeOneitem,
            }}
         >
            {this.props.children}
         </CartContext.Provider>
      );
   }
}

export default CartProvider;
