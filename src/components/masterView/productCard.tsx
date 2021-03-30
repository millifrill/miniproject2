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
import { useHistory } from 'react-router-dom';

type Props = {
   product: Product;
   handleAddToCart: (product: Product) => void;
   handleReadMore: () => void;
};

const ProductCard: React.FC<Props> = ({ product, handleAddToCart }) => {
   const classes = useStyles();
   const history = useHistory();

   const [quantity, setQuantity] = React.useState('');

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setQuantity(event.target.value as string);
   };

   const addProductToCart = () => {
      history.push('/produkt/' + product.id);
   };

   const goToProductView = () => {
      history.push('/produkt/' + product.id);
   };

   return (
      <Card className={classes.root}>
         <CardActionArea onClick={goToProductView}>
            <CardMedia className={classes.cardImg} />
            <img
               className={classes.img}
               src={product.image}
               alt="Dahlia blomma"
            />
            <CardContent className={classes.cardContent}>
               <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
               >
                  {product.title}
               </Typography>
               <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
               >
                  {product.description}
               </Typography>
               <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
               >
                  {product.price} kr
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions className={classes.cardActionsGroup}>
            <div>
               <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="select-outlined-label">
                     {/* Antal */}
                  </InputLabel>
                  <Select
                     labelId="select-outlined-label"
                     id="select-outlined"
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
            </div>
            <div>
               <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={goToProductView}
                  size="large"
               >
                  Mer info
               </Button>
            </div>
         </CardActions>
      </Card>
   );
};

export default ProductCard;

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      formControl: {
         margin: theme.spacing(0),
         width: '3.5rem',
         paddingRight: '0.3rem',
      },
      root: {
         width: '17rem',
         minHeight: '33rem',
      },
      cardImg: {
         margin: 'auto',
      },
      img: {
         height: '15rem',
         width: '15rem',
         margin: '1rem',
         text: 'center',
         alignSelf: 'center',
      },
      cardContent: {
         height: '11rem',
         padding: '0rem 1rem 0rem 1rem',
      },
      title: {
         textAlign: 'left',
         margin: '0.2rem',
      },
      text: {
         textAlign: 'left',
         margin: '0.2rem',
         marginTop: '0.5rem',
      },
      cardActionsGroup: {
         display: 'flex',
         justifyContent: 'space-between',
         padding: '1rem',
      },
      button: {
         height: '3rem',
         fontSize: '0.7rem',
      },
   }),
);


