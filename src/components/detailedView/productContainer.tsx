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
import { Product, products } from '../mockedProducts';
import { useRouteMatch } from 'react-router-dom';

type Props = {
   product: Product;
   handleAddToCart: (product: Product) => void;
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      formControl: {
         margin: theme.spacing(0),
         minWidth: '4,9rem',
         paddingRight: '0.3rem',
      },
      root: {
         width: '22rem',
         minHeight: '36.5rem',
      },
      cardImg: {
         margin: 'auto',
      },
      img: {
         height: '18.75rem',
         width: '18.75rem',
         margin: '1.5rem',
         text: 'center',
         alignSelf: 'center',
      },
      cardContent: {
         height: '8rem',
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
      cardActionsGroup: {
         display: 'flex',
         justifyContent: 'space-between',
         padding: '1.5rem',
      },
      button: {
         height: '3rem',
      },
   }),
);

// const ProductContainer: React.FC<Props> = ({ product, handleAddToCart }) => {
//    const match = useRouteMatch<{ id: string }>();

//    const product = products.find((p) => String(p.id) === match.params.id);

//    const handleAddToCart = () => {
//       // todo....
//    };

//    if (!product) {
//       return <p>"Produkten du letar efter finns inte... 404"</p>;
//    }

//    const classes = useStyles();
//    const history = useHistory();

//    const [quantity, setQuantity] = React.useState('');

//    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//       setQuantity(event.target.value as string);
//    };


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
      return <p>"Produkten du letar efter finns inte... 404"</p>;
   }

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia className={classes.cardImg} />
            <img
               className={classes.img}
               src={product.image}
               alt="Dahlia blomma"
               height="300"
               width="300"
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
         </CardActions>
      </Card>
   );
};

export default ProductContainer;






// import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Button from '@material-ui/core/Button';
// import { products } from '../mockedProducts';
// import { useRouteMatch } from 'react-router-dom';
// import { MenuItem } from '@material-ui/core';
// import { Select } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';

// const useStyles = makeStyles((theme: Theme) =>
//    createStyles({
//       root: {
//          flexGrow: 1,
//          height: '100vh',
//       },
//       paper: {
//          padding: theme.spacing(2),
//          margin: 'auto',
//          maxWidth: '50rem',
//          height: 'auto',
//          width: 'auto',
//       },
//       image: {
//          width: '20rem',
//          height: '20rem',
//       },
//       title: {
//          font: '2rem',
//       },

//       img: {
//          margin: 'auto',
//          display: 'flex',
//          maxWidth: '100%',
//          maxHeight: '100%',
//       },
//       button: {
//          height: '3rem',
//       },
//    }),
// );

// const ProductContainer: React.FC = () => {
//    const classes = useStyles();
//    const match = useRouteMatch<{ id: string }>();

//    const product = products.find((p) => String(p.id) === match.params.id);

//    const [quantity, setQuantity] = React.useState('');

//    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//       setQuantity(event.target.value as string);
//    };

//    const handleAddToCart = () => {
//       // todo....
//    };

//    if (!product) {
//       return <p>"Produkten du letar efter finns inte... 404"</p>;
//    }

//    return (
//       <div className={classes.root}>
//          <Paper className={classes.paper}>
//             <Grid container spacing={2}>
//                <Grid item>
//                   <ButtonBase className={classes.image}>
//                      <img
//                         className={classes.img}
//                         src={product.image}
//                         alt="Dahlia blomma"
//                         height="300"
//                         width="300"
//                      />
//                   </ButtonBase>
//                </Grid>
//                <Grid item xs={12} sm container>
//                   <Grid item xs container direction="column" spacing={2}>
//                      <Grid item xs>
//                         <Typography
//                            className={classes.title}
//                            gutterBottom
//                            variant="h3"
//                            component="h5"
//                         >
//                            {product.title}
//                         </Typography>
//                         <Typography variant="h6" gutterBottom component="h4">
//                            {product.description}
//                         </Typography>
//                         <Typography
//                            variant="h6"
//                            color="textSecondary"
//                            component="p"
//                         >
//                            {product.price} kr
//                         </Typography>
//                      </Grid>
//                      <Grid item>
//                         <Typography
//                            variant="body2"
//                            style={{ cursor: 'pointer' }}
//                         >
//                            <Select
//                               labelId="demo-simple-select-outlined-label"
//                               id="demo-simple-select-outlined"
//                               label="Antal"
//                               value={quantity}
//                               onChange={handleChange}
//                            >
//                               <MenuItem value="">
//                                  <em>None</em>
//                               </MenuItem>
//                               <MenuItem value={0}>0</MenuItem>
//                               <MenuItem value={1}>1</MenuItem>
//                               <MenuItem value={2}>2</MenuItem>
//                               <MenuItem value={3}>3</MenuItem>
//                               <MenuItem value={4}>4</MenuItem>
//                               <MenuItem value={5}>5</MenuItem>
//                               <MenuItem value={6}>6</MenuItem>
//                               <MenuItem value={7}>7</MenuItem>
//                               <MenuItem value={8}>8</MenuItem>
//                               <MenuItem value={9}>9</MenuItem>
//                               <MenuItem value={10}>10</MenuItem>
//                            </Select>
//                            <Button
//                               className={classes.button}
//                               onClick={handleAddToCart}
//                               variant="contained"
//                               color="primary"
//                            >
//                               Köp
//                            </Button>
//                         </Typography>
//                      </Grid>
//                   </Grid>
//                </Grid>
//             </Grid>
//          </Paper>
//       </div>
//    );
// };
// export default ProductContainer;
