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
   FormControl,
   Grid,
   InputLabel,
   MenuItem,
   Select,
   Typography,
} from '@material-ui/core';
import { products } from '../mockedProducts';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface Props {}

const CartView: React.FC<Props> = () => {
   const [quantity, setQuantity] = React.useState('');

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setQuantity(event.target.value as string);
   };

   const classes = useStyles();

   const [subTotal] = React.useState('');

   return (
      <React.Fragment>
         <Typography variant="h5" gutterBottom>
            Kundvagn
         </Typography>
         <Grid className={classes.mainstyle}>
            <TableContainer component={Paper}>
               <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.hide}>
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
                        product, //
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
                           <TableCell>{product.price} kr</TableCell>
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
         </Grid>
      </React.Fragment>
   );
};

export default CartView;

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      hide: {
         display: 'none',
               [theme.breakpoints.up('md')]: {
                   display: 'block',
               },
      },
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
      mainstyle: {
         maxWidth: '100rem',
         paddingTop: '1rem',
         margin: 'auto',
      },
      img: {
         height: '5rem',
      },
   }),
);
