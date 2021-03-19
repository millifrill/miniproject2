import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from '../mockedProducts';

type Props = {
   products: Product;
   handleAddToCart: (products: Product) => void;
   handleReadMore: () => void;
};

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   img: {
      height: 300,
      width: 300,
      margin: '1rem',
      textAlign: 'center',
   },
   title: {
      textAlign: 'left',
      margin: '0.3rem',
   },
   text: {
      textAlign: 'left',
      margin: '0.3rem',
      marginTop: '0.5rem',
   },
});

const handleReadMore = () => {};

const ProductCard: React.FC<Props> = ({ products, handleAddToCart }) => {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia />
            <img
               className={classes.img}
               src={products.image}
               alt="Dahlia blomma"
               height="300"
               width="300"
            />
            <CardContent>
               <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
               >
                  {products.title}
               </Typography>
               <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
               >
                  {products.description}
               </Typography>
               <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
               >
                  {products.price}kr
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               onClick={() => handleAddToCart(products)}
               size="small"
               color="primary"
            >
               Köp
            </Button>
            <Button onClick={handleReadMore}
            size="small" 
            color="primary">
               Mer info
            </Button>
         </CardActions>
      </Card>
   );
};

export default ProductCard;


