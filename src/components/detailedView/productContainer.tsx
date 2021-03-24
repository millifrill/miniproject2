import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { products } from '../mockedProducts';
import { useRouteMatch } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '60rem',
      height: 'auto',
      width: 'auto',
    },
    image: {
      width: '20rem',
      height: '20rem',
    },
    title:{
      font: '2rem',
      height: '4rem',
    },
  
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);
 
const ProductContainer: React.FC = () => {
  const classes = useStyles();
  const match = useRouteMatch<{ id: string }>();

  const product = products.find(p => String(p.id) === match.params.id)

  const [quantity, setQuantity] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuantity(event.target.value as string);
 };

  const handleAddToCart = () => {
    // todo....
  }

  if (!product) {
    return <p>"Produkt du letar efter finns inte... 404"</p>
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} src="https://live.staticflickr.com/3727/9541317886_bbaf9957ed_b.jpg" alt="Dahlias"></img>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.title} gutterBottom variant="h3" component="h5">
                  {product.title}
                </Typography>
                <Typography variant="h6" gutterBottom component="h4">
                 {product.description}
                </Typography>
                <Typography  variant="h6" color="textSecondary" component="p">
                  {product.price} kr
                </Typography>
              </Grid>
              <Grid item>
                
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Select
                     labelId="demo-simple-select-outlined-label"
                     id="demo-simple-select-outlined"
                     label="Antal" 
                     value={quantity}
                      onChange={handleChange}>
                       
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
                     <MenuItem value={11}>11</MenuItem>
                  </Select>
                <Button onClick={handleAddToCart} variant="contained" color="primary">
                 Köp</Button> 
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default ProductContainer;