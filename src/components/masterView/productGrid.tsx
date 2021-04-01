import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { products } from '../mockedProducts';
import ProductCard from './productCard';

export default function ProductGrid() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container justify="center" direction="row" className={classes.grid} spacing={2} wrap="wrap">
            {products.map((product) => (
               <Grid item justify="center" className={classes.gridItem} sm={12} md={6} lg={4}>
                  <ProductCard
                     product={product}
                     handleReadMore={() => {}}
                  />
               </Grid>
            ))}
         </Grid>
      </div>
   );
}

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         flexGrow: 1,
         flexBasis: 0,
         maxWidth: '70rem',
         marginBlockStart: '3rem',
      },
      grid: {
         margin: 'auto',
      },
      gridItem: {
         display: 'flex',
         width: '18rem',
         margin: 'auto',
         padding: '0',
         marginTop: '0.5rem',
      },
   }),
);

