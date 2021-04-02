import { BrowserRouter } from 'react-router-dom';
import CartProvider from '../contexts/cartContext';
import Layout from './layout';
import { Product } from './mockedProducts';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
export interface CartItemType extends Product {
   quantity: number;
}
declare module '@material-ui/core/styles/createBreakpoints' {
   interface BreakpointOverrides {
      xxs: true;
      xs: true;
      sm: true;
      md: true;
      lg: true;
      xl: true;
   }
}

const theme = createMuiTheme({
   breakpoints: {
      values: {
         xxs: 0,
         xs: 400,
         sm: 750,
         md: 1060,
         lg: 1280,
         xl: 1920,
      },
   },
});

export default function App() {
   return (
      <MuiThemeProvider theme={theme}>
         <CartProvider>
            <BrowserRouter>
               <Layout />
            </BrowserRouter>
         </CartProvider>
      </MuiThemeProvider>
   );
}
