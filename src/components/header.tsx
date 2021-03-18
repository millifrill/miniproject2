// import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {
   createStyles,
   fade,
   Theme,
   makeStyles,
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
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
      },
      inputRoot: {
         color: 'inherit',
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

export default function Header() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Typography className={classes.title} variant="h6" noWrap>
                  DAHLIABANKEN
               </Typography>
               <div className={classes.search}>
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
               </div>
               <IconButton
                  edge="end"
                  className={classes.shoppingCartButton}
                  color="inherit"
                  aria-label="shopping cart"
               >
                  <Badge color="error" badgeContent={0} showZero>
                     <ShoppingCartIcon />
                  </Badge>
               </IconButton>
               <IconButton
                  edge="end"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
               >
                  <MenuIcon />
               </IconButton>
            </Toolbar>
         </AppBar>
      </div>
   );
}