// import Button from 'material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from '../mockedProducts';
import beata from '../../src/assets/images/boll/beata.jpg'


type Props = {
   products: Product;
   handleAddToCart: (products: Product) => void;
};

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});

const ProductCard: React.FC<Props> = ({ products, handleAddToCart }) => {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia
              //  className={classes.media}
              //  image="/static/images/cards/contemplative-reptile.jpg"
              //  title="Contemplative Reptile"
            />
            <img src={products.image} alt="Dahlia blomma"/>
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  {products.title}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  {products.description}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  {products.price}
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
            <Button size="small" color="primary">
               Mer info
            </Button>
         </CardActions>
      </Card>
   );
};

export default ProductCard;
