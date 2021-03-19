import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Product } from '../mockedProducts';

type Props = {
   products: Product;
   handleAddToCart: (products: Product) => void;
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
         height: '100vh',
      },
      paper: {
         padding: theme.spacing(2),
         margin: 'auto',
         maxWidth: '50rem',
         height: 'auto',
         width: 'auto',
      },
      image: {
         width: '20rem',
         height: '20rem',
      },
      img: {
         margin: 'auto',
         display: 'block',
         maxWidth: '100%',
         maxHeight: '100%',
      },
   }),
);

const ProductContainer: React.FC<Props> = ({ products, handleAddToCart }) => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Paper className={classes.paper}>
            <Grid container spacing={2}>
               <Grid item>
                  <ButtonBase className={classes.image}>
                     <img
                        className={classes.img}
                        src="https://live.staticflickr.com/3727/9541317886_bbaf9957ed_b.jpg"
                        alt="Dahlias"
                     ></img>
                  </ButtonBase>
               </Grid>
               <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                     <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                           {products.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                           {products.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                           {products.price}
                        </Typography>
                     </Grid>
                     <Grid item>
                        <Typography
                           variant="body2"
                           style={{ cursor: 'pointer' }}
                        >
                           <Button
                              onClick={() => handleAddToCart(products)}
                              variant="contained"
                              color="primary"
                           >
                              Lägg till kundvägen
                           </Button>
                        </Typography>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Paper>
      </div>
   );
};
export default ProductContainer;
