import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router-dom';

interface Props {}

const CartView: React.FC<Props> = () => {
    const [quantity] = React.useState('');
    const { cart, addToCart, remvoecart, removeitems } = useContext(
        CartContext,
    ); // lägg till här gemom  ,delsumman och sen få in den i lägre ner vet ej nu
    const classes = useStyles();
    const history = useHistory();
    const goToStartPageView = () => {
        history.push('/');
    };

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Varukorg
            </Typography>
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
                                            <Button className={classes.quantityButton}
                                                onClick={() => {
                                                    removeitems(product);
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
                                            <Button className={classes.quantityButton}
                                                onClick={() => {
                                                    addToCart(product);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell>
                                        {product.subTotal} kr{' '}
                                    </TableCell>
                                    <TableCell>
                                        <Grid item xs={8}>
                                            <DeleteForeverIcon
                                                onClick={() => {
                                                    remvoecart(product);
                                                }}
                                            />
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className={classes.flexEnd}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={goToStartPageView}
                    >
                        Fortsätt handla
                    </Button>
                </div>
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
        buttonGroup: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'black',
            '& > *': {},
        },
        button: {
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
            height: '-0.5rem',
        },
    }),
);
