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
    createMuiTheme,
} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { products } from './mockedProducts';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import { CartContext } from '../contexts/cartContext';

export default function Header() {
    const [quantity, setQuantity] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQuantity(event.target.value as string);
    };

    const classes = useStyles();

    const [subTotal] = React.useState('');

    return (
        // <CartContext.Consumer>
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography
                        className={classes.title}
                        variant="h4"
                        component="h2"
                        noWrap
                    >
                        <Link to="/" className={classes.noDecoration}>
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
                    <div className={classes.buttonGroup}>
                      
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={
                                <div>
                                    <Badge
                                        color="error"
                                        badgeContent={0}
                                        showZero
                                    >
                                        <ShoppingCartIcon />
                                    </Badge>
                                    <label className={classes.cartLabel}>
                                        0 kr{/* render quantity */}
                                    </label>
                                </div>
                            }
                        ></Button>
                        <Button className={classes.button} variant="contained">
                            <div>
                                {' '}
                                <Link
                                    to="/checkout/checkout"
                                    className={classes.textsizes}
                                >
                                    Till kassan
                                </Link>{' '}
                            </div>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        // </CartContext.Consumer>
    );
}

// const theme = createMuiTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 960,
//             lg: 1280,
//             xl: 1920,
//         },
//     },
// });

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            height: '5.5rem',
            backgroundColor: '#202e32',
        },
        title: {
            flexGrow: 1,
            marginStart: '4rem',
            marginTop: '1.5rem',
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
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
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            marginStart: '2rem',
        },
        shoppingCartButton: {
            marginStart: '1rem',
        },
        accordion: {
            width: '15rem',
        },
        buttonGroup: {
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: 'row',
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
            width: 'auto',
        },
        inputRoot: {
            color: 'inherit',
        },
        button: {
            height: '2.7rem',
            marginLeft: '2rem',
            background: 'lightBlue',
            color: 'black',
            backgroundColor: '#a1bac0',
            width: 'auto',
            textDecoration: 'none',
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
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
            button: {
                height: '2.5rem',
                marginLeft: '2rem',
                background: 'lightBlue',
                color: 'black',
                backgroundColor: '#a7c5f1',
                fontSize: '0.8rem',
            },
            cartLabel: {
                marginLeft: '1rem',
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
        },
    }),
);
