import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from '../mockedProducts';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { CardActionArea, CardActions } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

type Props = {
   product: Product;
   handleReadMore: () => void;
};

function Alert(props: AlertProps) {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductCard: React.FC<Props> = ({ product }) => {
   const classes = useStyles();
   const history = useHistory();
   const { addToCart } = useContext(CartContext);
   const goToProductView = () => {
      history.push('/produkt/' + product.id);
   };
   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
      setOpen(true);
   };

   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
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
            <Button
               className={classes.button}
               variant="contained"
               color="primary"
               onClick={() => {handleClick(); addToCart(product)}}
               size="large"
            >
               Lägg till i varukorg
            </Button>
         </CardActions>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
               Produkten har lagts till i varukorgen!
            </Alert>
         </Snackbar>
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
         width: '100%',
         fontSize: '0.7rem',
         backgroundColor: '#30464d',
         '&:hover': {
            backgroundColor: '#30464d',
         },
      },
   }),
);
