import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';

export default function Header() {
    //om produkt redan finns i varukorgen så öka antal
    const { cart } = useContext(CartContext);
    const classes = useStyles();

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
                    <Button
                        variant="contained"
                        color="primary"
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
                                        badgeContent={cart.length}
                                        showZero
                                    >
                                        <ShoppingCartIcon />
                                    </Badge>
                                    <label className={classes.cartLabel}>
                                        Varukorg
                                    </label>
                                </Link>{' '}
                            </div>
                        }
                    ></Button>
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
    }),
);
