import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      formControl: {
         margin: theme.spacing(1),
         minWidth: 80,
      },
      root: {
         maxWidth: 360,
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
   }),
);

const handleReadMore = () => {};

const ProductCard: React.FC<Props> = ({ products, handleAddToCart }) => {
   const classes = useStyles();

   const [quantity, setQuantity] = React.useState('');

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setQuantity(event.target.value as string);
   };

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
            <div>
               <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                     1
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
                     <MenuItem value={10}>0</MenuItem>
                     <MenuItem value={20}>1</MenuItem>
                     <MenuItem value={30}>2</MenuItem>
                     <MenuItem value={30}>3</MenuItem>
                     <MenuItem value={30}>4</MenuItem>
                     <MenuItem value={30}>5</MenuItem>
                     <MenuItem value={30}>6</MenuItem>
                     <MenuItem value={30}>7</MenuItem>
                     <MenuItem value={30}>8</MenuItem>
                     <MenuItem value={30}>9</MenuItem>
                     <MenuItem value={30}>10</MenuItem>
                     <MenuItem value={30}>11</MenuItem>
                  </Select>
               </FormControl>
            </div>
            <Button
               variant="contained"
               color="primary"
               onClick={() => handleAddToCart(products)}
               size="large"
            >
               Köp
            </Button>
            <Button
               variant="contained"
               color="primary"
               onClick={handleReadMore}
               size="large"
            >
               Mer info
            </Button>
         </CardActions>
      </Card>
   );
};

export default ProductCard;
