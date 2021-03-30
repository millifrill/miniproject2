import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
   {
      name: 'Casy Marilyn',
      price: '35 kr',
   },
   {
      name: 'Low Sunset',
      price: '35 kr',
   },
   { name: 'Frakt', desc: '', price: 'Gratis' },
];
const addresses = ['Sankt Pauligatan 31A', '41660', 'Göteborg'];
const payments = [
   { name: 'Kort', detail: 'Visa' },
   { name: 'Kortägare', detail: 'Camilla Johansson' },
   { name: 'Kortnummer', detail: 'xxxx-xxxx-xxxx-1234' },
   { name: 'Utgångsdatum', detail: '04/2024' },
];

export default function Review() {
   const classes = useStyles();

   return (
      <React.Fragment>
         <Typography variant="h5" gutterBottom>
            Orderöversikt
         </Typography>
         <List disablePadding>
            {products.map((product) => (
               <ListItem className={classes.listItem} key={product.name}>
                  <ListItemText
                     primary={product.name}
                     secondary={product.desc}
                  />
                  <Typography variant="body2">{product.price}</Typography>
               </ListItem>
            ))}
            <ListItem className={classes.listItem}>
               <ListItemText primary="Total" />
               <Typography variant="subtitle1" className={classes.total}>
                  70 kr
               </Typography>
            </ListItem>
         </List>
         <Grid container spacing={1}>
            <div className={classes.topMargin}>
               <Grid className={classes.listItem} item xs={12} sm={6}>
                  <Typography
                     variant="h6"
                     gutterBottom
                     className={classes.title}
                  >
                     Frakt
                  </Typography>
                  <Typography gutterBottom>Camilla Johansson</Typography>
                  <Typography gutterBottom>{addresses.join(', ')}</Typography>
               </Grid>
               <Grid item container direction="column" xs={12} sm={6}>
                  <Typography
                     variant="h6"
                     gutterBottom
                     className={classes.title}
                  >
                     Betalningsdetaljer
                  </Typography>
                  <Grid container>
                     {payments.map((payment) => (
                        <React.Fragment key={payment.name}>
                           <Grid item xs={6}>
                              <Typography gutterBottom>
                                 {payment.name}
                              </Typography>
                           </Grid>
                           <Grid item xs={6}>
                              <Typography gutterBottom>
                                 {payment.detail}
                              </Typography>
                           </Grid>
                        </React.Fragment>
                     ))}
                  </Grid>
               </Grid>
            </div>
         </Grid>
      </React.Fragment>
   );
}

const useStyles = makeStyles((theme) => ({
   listItem: {
      padding: theme.spacing(1, 0),
   },
   total: {
      fontWeight: 700,
   },
   title: {
      marginTop: theme.spacing(2),
   },
   topMargin: {
      marginTop: '1rem',
      marginRight: '1rem',
   },
}));
