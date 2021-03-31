import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Product } from '../mockedProducts';
import {
    Button,
    Grid,
} from '@material-ui/core';
import { CartContext } from '../../contexts/cartContext';

type Props = {
    product: Product;
};

const ProductContainer: React.FC<Props> = ({ product }) => {
    const classes = useStyles();
    const { addToCart } = useContext(CartContext);
    // const [quantity, setQuantity] = React.useState('');

    if (!product) {
        return (
            <p className={classes.p}>
                "Produkten du letar efter finns inte... 404"
            </p>
        );
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                src={product.image}
                                alt="Dahlia blomma"
                            />{' '}
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {product.description}
                                </Typography>
                                <Typography variant="h6">
                                    {product.price} kr
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(product)}
                                    size="large"
                                >
                                    Lägg till i varukorg
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default ProductContainer;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: '30rem',
        },
        image: {
            width: 300,
            height: 300,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        p: {
            margin: 'auto',
        },
        button: {
            height: '3rem',
            width: '100%',
            fontSize: '0.9rem',
            backgroundColor: '#30464d',
            '&:hover': {
                backgroundColor: '#30464d',
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '0.7rem',
            },
        },
    }),
);

