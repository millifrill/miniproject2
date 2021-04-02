import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import { ButtonGroup, Grid, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

type Anchor = 'right';

export default function Header() {
   const [quantity] = React.useState('');
   const { cart, addToCart, removeCart, removeItems, total } = useContext(
      CartContext,
   ); 

   const classes = useStyles();

   let carlentg = 0;

   cart.forEach((CartItem) => {
      carlentg = carlentg + CartItem.quantity;
   });

   const [state, setState] = React.useState({
      right: false,
   });

   const toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
   ) => {
      if (
         event.type === 'keydown' &&
         ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
      ) {
         return;
      }

      setState({ ...state, [anchor]: open });
   };

   const history = useHistory();
   const goToStartPageView = () => {
      history.push('/');
   };
   const goToCheckout = () => {
      history.push('/checkout/checkout');
   };

   const list = (anchor: Anchor) => (
      <div
         className={clsx(classes.list, {
            [classes.fullList]: anchor === 'right',
         })}
         role="presentation"
         onClick={toggleDrawer(anchor, true)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <List>
            <React.Fragment>
               <Grid className={classes.mainstyle}>
                  <TableContainer component={Paper}>
                     <Table className={classes.table} aria-label="simple table">
                        <TableHead className={classes.center}>
                           <TableRow>
                              <Typography
                                 variant="h5"
                                 gutterBottom
                              >
                                 Varukorg
                              </Typography>
                           </TableRow>
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
                           {cart.map((product) => (
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
                                    <ButtonGroup
                                       className={classes.buttonGroup}
                                       color="primary"
                                       aria-label="outlined primary button group"
                                    >
                                       <Button
                                          className={classes.quantityButton}
                                          onClick={() => {
                                             removeItems(product);
                                          }}
                                       >
                                          -
                                       </Button>
                                       <TextField
                                          variant="outlined"
                                          className={classes.inputstyling}
                                          id={quantity}
                                          value={product.quantity}
                                       />
                                       <Button
                                          className={classes.quantityButton}
                                          onClick={() => {
                                             addToCart(product);
                                          }}
                                       >
                                          +
                                       </Button>
                                    </ButtonGroup>
                                 </TableCell>
                                 <TableCell>{product.subTotal} kr </TableCell>
                                 <TableCell>
                                    <Grid item xs={8}>
                                       <DeleteForeverIcon
                                          onClick={() => {
                                             removeCart(product);
                                          }}
                                       />
                                    </Grid>
                                 </TableCell>
                              </TableRow>
                           ))}
                           <TableRow>
                              <TableCell>Totalsumma:</TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell>{total}kr</TableCell>
                           </TableRow>
                        </TableBody>
                     </Table>
                  </TableContainer>
                  <div className={classes.flexEnd}>
                     <Button
                        className={classes.buttonCart}
                        variant="contained"
                        onClick={goToStartPageView}
                     >
                        Fortsätt handla
                     </Button>
                  </div>
                  <div className={classes.flexEnd}>
                     <Button
                        className={classes.buttonCart}
                        variant="contained"
                        onClick={goToCheckout}
                     >
                        Gå till kassan
                     </Button>
                  </div>
               </Grid>
            </React.Fragment>
         </List>
      </div>
   );

   return (
      <div className={classes.root}>
         <AppBar position="static" className={classes.appBar}>
            <Toolbar>
               <Typography
                  className={classes.title}
                  variant="h1"
                  component="h2"
                  noWrap
               >
                  <Link to="/" className={classes.noDecoration}>
                     DAHLIABANKEN
                  </Link>
               </Typography>

               <div>
                  {(['right'] as Anchor[]).map((anchor) => (
                     <React.Fragment key={anchor}>
                        <Button
                           variant="contained"
                           className={classes.button}
                           startIcon={
                              <div>
                                 {' '}
                                 <Link
                                    to="/checkout/checkout"
                                    className={classes.textsizes}
                                 >
                                    <Badge
                                       color="error"
                                       badgeContent={carlentg}
                                       showZero
                                    >
                                       <ShoppingBasketIcon />
                                    </Badge>
                                    <label className={classes.cartLabel}>
                                       Varukorg
                                    </label>
                                 </Link>{' '}
                              </div>
                           }
                           onClick={toggleDrawer(anchor, true)}
                        ></Button>
                        <Drawer
                           anchor={anchor}
                           open={state[anchor]}
                           onClose={toggleDrawer(anchor, false)}
                        >
                           {list(anchor)}
                        </Drawer>
                     </React.Fragment>
                  ))}
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
}

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
      },
      appBar: {
         height: '6.5rem',
         [theme.breakpoints.down('md')]: {
            height: '4.5rem',
         },
         [theme.breakpoints.between('md', 'lg')]: {
            height: '6.5rem',
         },
         [theme.breakpoints.up('lg')]: {
            height: '8.5rem',
         },
         backgroundColor: '#202e32',
         justifyContent: 'center',
      },
      title: {
         flexGrow: 1,
         alignSelf: 'center',
         marginStart: '4rem',
         [theme.breakpoints.up('lg')]: {
            fontSize: theme.typography.pxToRem(55),
            marginStart: '6rem',
         },
         [theme.breakpoints.between('md', 'lg')]: {
            fontSize: theme.typography.pxToRem(50),
            marginStart: '6rem',
         },
         [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.pxToRem(35),
            marginStart: '2rem',
         },
         [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(20),
            marginStart: '1rem',
         },
         fontWeight: theme.typography.fontWeightBold,
      },
      textsizes: {
         fontSize: '1rem',
         textDecoration: 'none',
         width: 'auto',
         color: 'black',
      },
      noDecoration: {
         textDecoration: 'none',
         color: '#e4ece4',
      },
      button: {
         height: '2.7rem',
         marginRight: '0.8rem',
         [theme.breakpoints.up('lg')]: {
            marginRight: '6rem',
         },
         [theme.breakpoints.between('md', 'lg')]: {
            marginRight: '4rem',
         },
         marginLeft: '1rem',
         background: 'lightBlue',
         color: 'black',
         backgroundColor: '#a1bac0',
         '&:hover': {
            backgroundColor: '#a1bac0',
         },
         width: 'auto',
         textDecoration: 'none',
      },
      cartLabel: {
         marginLeft: '1rem',
         width: 'auto',
         textDecoration: 'none',
         display: 'inline-block',
         [theme.breakpoints.down('sm')]: {
            display: 'none',
         },
      },
      list: {
         width: '25rem',
      },
      fullList: {
         width: 'auto',
      },
      table: {
         paddingRight: '30rem',
         alignItems: 'center',
      },
      buttonGroup: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         color: 'black',
         '& > *': {},
      },
      buttonCart: {
         marginTop: theme.spacing(3),
         marginLeft: theme.spacing(1),
         backgroundColor: '#30464d',
         '&:hover': {
            backgroundColor: '#30464d',
         },
         color: 'white',
         height: '2.5rem',
         width: 'auto',
         textDecoration: 'none',
      },
      center: {
         justifyContent: 'center',
      },
      flexEnd: {
         display: 'flex',
         alignItems: 'flex-end',
         justifyContent: 'flex-start',
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
      quantityButton: {
         height: '3rem',
      },
      inputstyling: {
         width: '2.5rem',
      },
   }),
);
