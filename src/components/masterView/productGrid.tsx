import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { products } from '../mockedProducts';
import ProductCard from './productCard';

interface Props {
   id: string
}

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         flexGrow: 1,
         flexBasis: 0,
         maxWidth: '70rem',
         marginBlockStart: '2rem',
      },
      gridItem: {
         width: '20rem',
      },
   }),
);

export default function ProductGrid() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Grid container spacing={2} wrap="wrap">
            {products.map((product) => (
               <Grid item className={classes.gridItem} sm={12} md={6} lg={4}>
                  <ProductCard
                     product={product}
                     handleAddToCart={() => {}}
                     handleReadMore={() => {}}
                  />
               </Grid>
            ))}
         </Grid>
      </div>
   );
}
