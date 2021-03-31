import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { products } from '../mockedProducts';
import ProductCard from './productCard';

export default function ProductGrid() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container justify="center" className={classes.grid} spacing={2} wrap="wrap">
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
         flexGrow: 1,
         flexBasis: 0,
         maxWidth: '70rem',
         marginBlockStart: '3rem',
      },
      grid: {
         justifyItems: 'space-between',

         justifyContent: 'space-between',
         margin: 'auto',
      },
      gridItem: {
         justifySelf: 'space-between',

         width: '18rem',
         margin: 'auto',
      },
   }),
);

