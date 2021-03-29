import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <React.Fragment>
            <Typography variant="h4" gutterBottom>
               Betalningsmetod
            </Typography>
            <Grid container spacing={3}>
               <Grid item xs={12} md={6}>
                  <TextField
                     required
                     id="cardName"
                     label="För- och efternamn"
                     fullWidth
                     autoComplete="cc-name"
                  />
               </Grid>
               <Grid item xs={12} md={6}>
                  <TextField
                     required
                     id="cardNumber"
                     label="Kortnummer"
                     fullWidth
                     autoComplete="cc-number"
                  />
               </Grid>
               <Grid item xs={12} md={6}>
                  <TextField
                     required
                     id="expDate"
                     label="Utgångsdatum"
                     fullWidth
                     autoComplete="cc-exp"
                  />
               </Grid>
               <Grid item xs={12} md={6}>
                  <TextField
                     required
                     id="cvv"
                     label="CVV"
                     helperText="Sista tre siffrorna på baksidan av kortet"
                     fullWidth
                     autoComplete="cc-csc"
                  />
               </Grid>
               <Grid item xs={12}>
                  <FormControlLabel
                     control={
                        <Checkbox
                           color="primary"
                           name="saveCard"
                           value="yes"
                        />
                     }
                     label="Kom ihåg mina kortuppgifter till nästa gång"
                  />
               </Grid>
            </Grid>
            {/* <input type="submit" value="Nästa"> */}
            <Button type="submit"
               className={classes.button}
               variant="contained"
               color="primary"
               size="large"
            >
               Nästa
            </Button>
            {/* </input> */}
         </React.Fragment>
      </div>
   );
}

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         minHeight: '100vh',
         flexGrow: 1,
         flexBasis: 0,
         maxWidth: '50rem',
         margin: 'auto',
         marginBlockStart: '5rem',
      },
      button: {
         height: '3rem',
         marginTop: '1rem',
         //  justifyContent: 'flex-end',
      },
   }),
);
