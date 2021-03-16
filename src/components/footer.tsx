import React, { CSSProperties } from 'react';

function Footer() {
   return (
      <div>
         <div style={footer}>
            <h3>home | about us | contact</h3>
         </div>
      </div>
   );
}

export default Footer;

const footer: CSSProperties = {
   display: 'flex',
   justifyContent: 'center',
   alignContent: 'center',
   flexDirection: 'column',
   background: 'lightgray',
   marginTop: 'auto',
};
