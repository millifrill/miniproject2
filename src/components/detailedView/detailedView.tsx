import { CSSProperties } from 'react';
import InfoTable from './infoTable';
import ProductContainer from './productContainer';

export default function DetailedView() {
      return (
         <div style={rootStyle}>
            <ProductContainer />
            <InfoTable />
         </div>
      );
}

const rootStyle: CSSProperties = {
   minHeight: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   margin: '2rem',
};