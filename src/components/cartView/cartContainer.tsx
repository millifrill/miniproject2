import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, MenuItem, Select } from '@material-ui/core';
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

const CartTable: React.FC<Props> = () => {

  const [quantity, setQuantity] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(event.target.value as string);
 };
 
  const classes = useStyles();

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
              <TableCell>
              <Select
                     labelId="demo-simple-select-outlined-label"
                     id="demo-simple-select-outlined"
                     label="Antal" 
                     value={quantity}
                      onChange={handleChange}>
                     <MenuItem value="">
                     </MenuItem>
                     <MenuItem value={0}>0</MenuItem>
                     <MenuItem value={1}>1</MenuItem>
                     <MenuItem value={2}>2</MenuItem>
                     <MenuItem value={3}>3</MenuItem>
                     <MenuItem value={4}>4</MenuItem>
                     <MenuItem value={5}>5</MenuItem>
                     <MenuItem value={6}>6</MenuItem>
                     <MenuItem value={7}>7</MenuItem>
                     <MenuItem value={8}>8</MenuItem>
                     <MenuItem value={9}>9</MenuItem>
                     <MenuItem value={10}>10</MenuItem>
                     <MenuItem value={11}>11</MenuItem>
                  </Select>
                {quantity}</TableCell>
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

function setQuantity(arg0: string) {
  throw new Error('Function not implemented.');
}
