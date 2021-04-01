import { Component, createContext } from 'react';
import { Product } from '../components/mockedProducts';

interface CartItem extends Product {
   quantity: number
   subTotal:number
   totalSum:number
}

interface State {
   cart: CartItem[];
}

interface ContextValue extends State {
   addToCart: (product: Product) => void;
   removeCart: (product: Product) => void;
   removeItems: (product: Product) => void;
   subTotal: (product: Product) => void;
   totalSum: (product: Product) => void;
}


export const CartContext = createContext<ContextValue>({
   cart: [],
   addToCart: () => {},
   removeCart: () =>{},
   removeItems: () =>{},
   subTotal: () =>{},
   totalSum: () =>{},
});

class CartProvider extends Component<{}, State> {
   state: State = {
      cart: [],
   };
   delSumma = () => {
     let total=0;
    this.state.cart.forEach(element => {
       total+=element.subTotal
       total+=element.totalSum
    });
    return total
   };
   
   removeOneitem= (product: Product) => {
      let updatedCart = [...this.state.cart];
      
      const removeOne = updatedCart.find((item) => item.id === product.id);
      
      if (removeOne) {
         //säker vädert
         removeOne.quantity--
         removeOne.subTotal-=removeOne.price 
         removeOne.totalSum-=removeOne.price 
         if(removeOne.quantity <= 0){
            this.removeTocart(product)
         }else{
            this.setState({ cart: updatedCart });
         }
      }
   };
   removeTocart= (product: Product) => {
      const removeItems: CartItem[]= this.state.cart.filter((item)=> item.id !== product.id);
      this.setState({cart: [...removeItems]});
      //tar bort en hella produkten

   };
   addProductToCart = (product: Product) => {
      let updatedCart = [...this.state.cart];
      
      const itemInCart = updatedCart.find((item) => item.id === product.id);

      if (itemInCart) {
         //Höja upp quantity
         itemInCart.quantity++
         itemInCart.subTotal+=itemInCart.price
         itemInCart.totalSum+=itemInCart.price
      } else {
         updatedCart =[...updatedCart, { ...product, quantity: 1, subTotal: product.price, totalSum: product.price}]
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
               removeCart: this.removeTocart,
               removeItems: this.removeOneitem,
               subTotal: this.delSumma,
               totalSum: this.delSumma,
            }}
         >
            {this.props.children}
         </CartContext.Provider>
      );
   }
}
export default CartProvider;
