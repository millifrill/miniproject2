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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
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
                        {/* <Accordion className={classes.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    Varukorg
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Kundvagn
                                    </Typography>
                                    <Grid className={classes.mainstyle}>
                                        <TableContainer component={Paper}>
                                            <Table
                                                className={classes.table}
                                                aria-label="simple table"
                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell></TableCell>
                                                        <TableCell>
                                                            Produkt
                                                        </TableCell>
                                                        <TableCell>
                                                            Pris
                                                        </TableCell>
                                                        <TableCell>
                                                            Antal
                                                        </TableCell>
                                                        <TableCell>
                                                            Delsumma
                                                        </TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {products.map((
                                                        product, //
                                                    ) => (
                                                        <TableRow
                                                            key={product.title}
                                                        >
                                                            <TableCell>
                                                                <img
                                                                    className={
                                                                        classes.img
                                                                    }
                                                                    src={
                                                                        product.image
                                                                    }
                                                                    alt="Dahlia blomma"
                                                                    height="50"
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                {product.title}
                                                            </TableCell>
                                                            <TableCell>
                                                                {product.price}{' '}
                                                                kr
                                                            </TableCell>
                                                            <TableCell>
                                                                <FormControl
                                                                    variant="outlined"
                                                                    className={
                                                                        classes.formControl
                                                                    }
                                                                >
                                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                                        1
                                                                    </InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={
                                                                            quantity
                                                                        }
                                                                        onChange={
                                                                            handleChange
                                                                        }
                                                                        label="Antal"
                                                                    >
                                                                        <MenuItem value="">
                                                                            <em>
                                                                                None
                                                                            </em>
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                0
                                                                            }
                                                                        >
                                                                            0
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                1
                                                                            }
                                                                        >
                                                                            1
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                2
                                                                            }
                                                                        >
                                                                            2
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                3
                                                                            }
                                                                        >
                                                                            3
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                4
                                                                            }
                                                                        >
                                                                            4
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                5
                                                                            }
                                                                        >
                                                                            5
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                6
                                                                            }
                                                                        >
                                                                            6
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                7
                                                                            }
                                                                        >
                                                                            7
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                8
                                                                            }
                                                                        >
                                                                            8
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                9
                                                                            }
                                                                        >
                                                                            9
                                                                        </MenuItem>
                                                                        <MenuItem
                                                                            value={
                                                                                10
                                                                            }
                                                                        >
                                                                            10
                                                                        </MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                                {quantity}
                                                            </TableCell>
                                                            <TableCell>
                                                                {subTotal}
                                                            </TableCell>
                                                            <TableCell>
                                                                <Grid
                                                                    item
                                                                    xs={8}
                                                                >
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
                            </AccordionDetails>
                        </Accordion> */}

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
