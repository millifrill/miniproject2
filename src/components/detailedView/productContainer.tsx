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
import { products } from '../mockedProducts';
import { useRouteMatch } from 'react-router-dom';

const ProductContainer: React.FC = () => {
   const classes = useStyles();
   const match = useRouteMatch<{ id: string }>();

   const product = products.find((p) => String(p.id) === match.params.id);

   const [quantity, setQuantity] = React.useState('');

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setQuantity(event.target.value as string);
   };

   const handleAddToCart = () => {
      // todo....
   };

   if (!product) {
      return <p className={classes.p}>"Produkten du letar efter finns inte... 404"</p>;
   }

   return (
      <Card className={classes.root}>
         <CardActionArea className={classes.cardActionArea}>
            <CardMedia className={classes.cardImg} />
            <img
               className={classes.img}
               src={product.image}
               alt="Dahlia blomma"
               height="300"
               width="300"
            />
         </CardActionArea>
         <CardActions className={classes.cardActionsGroup}>
            <CardContent className={classes.cardContent}>
               <div className={classes.cardContent}>
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
            </div>
            <div>
               <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                     {/* Antal */}
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
                  onClick={() => handleAddToCart()}
                  size="large"
               >
                  Köp
               </Button>
               </div>
            </CardContent>
         </CardActions>
      </Card>
   );
};

export default ProductContainer;


const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '45rem',
         minHeight: '24rem',
         display: 'flex',
         flexDirection: 'row',
      },
      cardImg: {},
      img: {
         height: '18.75rem',
         width: '18.75rem',
         margin: '1.5rem',
         text: 'center',
         alignSelf: 'center',
      },
      cardContent: {
        height: '15.7rem',
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
      p: {
         margin:'auto',
      },
      cardActionArea: {
         display: 'flex',
         flexDirection: 'column',
      },
      cardActionsGroup: {
         display: 'flex',
         flexDirection: 'column',
         alignSelf: 'left',
         padding: '1.5rem',
      },
      formControl: {
         margin: theme.spacing(0),
         minWidth: '3.5rem',
         paddingRight: '0.3rem',
      },
      button: {
         height: '3rem',
      },
   }),
);