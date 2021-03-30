import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { products } from '../mockedProducts';
import { useRouteMatch } from 'react-router-dom';
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';

const ProductContainer: React.FC = () => {
   
    const classes = useStyles();

    const match = useRouteMatch<{ id: string }>();

    const product = products.find((p) => String(p.id) === match.params.id);

    const [quantity, setQuantity] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQuantity(event.target.value as string);
    };

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
                                <Typography gutterBottom variant="subtitle1">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {product.description}
                                </Typography>
                                <Typography variant="body2">
                                    {product.price} kr
                                </Typography>
                            </Grid>
                            <Grid item>
                                <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                >
                                    <InputLabel id="demo-simple-select-outlined-label">
                                        {/* Antal */}
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
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addProductToCart()}
                                    size="large"
                                >
                                    Köp
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

function addProductToCart(): void {
    throw new Error('Function not implemented.');
}

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
        formControl: {
            margin: theme.spacing(0),
            minWidth: '3.5rem',
            paddingRight: '0.3rem',
        },
        button: {
            height: '3rem',
        },
    }),
);

