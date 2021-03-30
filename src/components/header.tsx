import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {
   createStyles,
   fade,
   Theme,
   makeStyles,
} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { CSSProperties } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { CartContext } from '../contexts/cartContext';
import { Grid } from '@material-ui/core';

// import { CartContext } from '../contexts/cartContext';


export default function Header() {
   const classes = useStyles();

   return (
      // <CartContext.Consumer>
         <div className={classes.root}>
            <AppBar position="static">
               <Toolbar>
                  <Typography className={classes.title} variant="h6" noWrap>
                     <Link to="/" style={noDecoration}>
                        DAHLIABANKEN
                     </Link>
                  </Typography>
                  {/* <div className={classes.search}>
                  <div className={classes.searchIcon}>
                     <SearchIcon />
                  </div>
                  <InputBase
                     placeholder="Sök…"
                     classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                     }}
                     inputProps={{ 'aria-label': 'search' }}
                  />
               </div> */}
               <Grid   direction="row"> 
                  <Button
                     variant="contained"
                     color="primary"
                     className={classes.button}
                     startIcon={
                        <div>
                           <Badge color="error" badgeContent={0} showZero>
                              <ShoppingCartIcon />
                           </Badge>
                           <label className={classes.cartLabel}>kundvagen</label>
                        </div>
                     }
                  ></Button>
                  <Button className={classes.button} variant="contained">
                     <div className={classes.textsizes}> <Link to="/checkout/checkout">Till kassan</Link> </div>
                     
                  </Button>
              </Grid> </Toolbar>
            </AppBar>
         </div>
      // </CartContext.Consumer>
   );
}


const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
      },
      
      textsizes:{
         fontSize: '1.7rem',
         textDecoration: 'none',
         width:'auto',
      },
      menuButton: {
         marginRight: theme.spacing(2),
         marginStart: '2rem',
      },
      shoppingCartButton: {
         marginStart: '1rem',
        
      },
      title: {
         flexGrow: 1,
         marginStart: '2rem',
         display: 'none',
         [theme.breakpoints.up('sm')]: {
            display: 'block',
         },
      },
      search: {
         position: 'relative',
         borderRadius: theme.shape.borderRadius,
         backgroundColor: fade(theme.palette.common.white, 0.15),
         '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
         },
         marginLeft: '1rem',
         marginRight: '1rem',
         width: '100%',
         [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
         },
      },
      searchIcon: {
         padding: theme.spacing(0, 2),
         height: '100%',
         position: 'absolute',
         pointerEvents: 'none',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         width:'auto',
      },
      inputRoot: {
         color: 'inherit',
      },
      button: {
         height: '2.7rem',
         marginLeft: '2rem',
         background: 'lightBlue',
         color: 'black',
         backgroundColor: '#a7c5f1',
         width:'auto',
         textDecoration: 'none',
         
      },
      cartLabel: {
         marginLeft: '1rem',
         width: '2rem',
         textDecoration: 'none',
      },
      inputInput: {
         padding: theme.spacing(1, 1, 1, 0),
         // vertical padding + font size from searchIcon
         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
         transition: theme.transitions.create('width'),
         width: '100%',
         [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
               width: '20ch',
            },
         },
      },
   }),
);

const noDecoration: CSSProperties = {
   textDecoration: 'none',
   color: 'white',
};
