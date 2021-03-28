import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
   Button,
   FormControl,
   Grid,
   InputLabel,
   MenuItem,
   Select,
} from '@material-ui/core';
import { products } from '../mockedProducts';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface Props {
   // products: Product;
}

const CartVeiw: React.FC<Props> = () => {
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
                     <TableCell></TableCell>
                     <TableCell>Produkt</TableCell>
                     <TableCell>Pris</TableCell>
                     <TableCell>Antal</TableCell>
                     <TableCell>Delsumma</TableCell>
                     <TableCell></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {products.map((
                     product, ///ändra product till vad läger till i kundvagen
                  ) => (
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
                           <FormControl
                              variant="outlined"
                              className={classes.formControl}
                           >
                              <InputLabel id="demo-simple-select-outlined-label">
                                 1
                              </InputLabel>
                              <Select
                                 labelId="demo-simple-select-outlined-label"
                                 id="demo-simple-select-outlined"
                                 value={quantity}
                                 onChange={handleChange}
                                 label="Antal"
                              >
                                 <MenuItem value="">
                                    <em>None</em>
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
                              </Select>
                           </FormControl>
                           {quantity}
                        </TableCell>
                        <TableCell>{subTotal}</TableCell>
                        <TableCell>
                           <Grid item xs={8}>
                              <DeleteForeverIcon />
                           </Grid>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
         >
            Nästa
         </Button>
      </Grid>
   );
};

export default CartVeiw;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  table: {
    paddingRight: '30rem',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: '1rem',
    paddingRight: '0.3rem',
    alignItems: 'center',
    
 },
  mainstyle:{
   maxWidth: '100rem',
   paddingTop: '2rem',
   margin: 'auto'
  },
  img:{
    height:'5rem',
  },
  button: {
    height: '3rem',
    marginTop: '1rem',
 },
}),
);
