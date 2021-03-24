import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Product, products } from '../mockedProducts';

type Props = {
  products: Product;
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  productCell: {
    display: 'flex',
    alignItems: 'center'
  },
  mainstyle:{
    minHeight: '100vh',
  },
  img:{
    height:'5rem',
  },
});

function createData(id: string, image: string, title: string, price: string, quantity: string, subTotal: string, Remove: string) {
  return { id, image, title, price, quantity, subTotal, Remove };
}

const rows = [
  createData("id", "image", "title", "price", "quantity", "subTotal", 'Remove'),
];



const CartTable: React.FC<Props> = () => {
  const classes = useStyles();

  const [quantity] = React.useState('');

  const [subTotal] = React.useState('');


  return (
    <Grid className={classes.mainstyle}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produkt</TableCell>
            <TableCell></TableCell>
            <TableCell>Pris</TableCell>
            <TableCell>Antal</TableCell>
            <TableCell>Delsumma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => ( ///ändra product till vad läger till i kundvagen
            <TableRow key={product.title}>
              <TableCell>
                <img
                  className={classes.img}
                  src={product.image}
                  alt="Dahlia blomma"
                  height="50"
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{quantity}</TableCell>
              <TableCell>{subTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}

export default CartTable;