import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
   const classes = useStyles();

   return (
         <React.Fragment>
            <Typography variant="h5" gutterBottom>
               Kunduppgifter
            </Typography>
            <Grid className={classes.form} container spacing={3}>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="firstName"
                     name="firstName"
                     label="Förnamn"
                     fullWidth
                     autoComplete="given-name"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="lastName"
                     name="lastName"
                     label="Efternamn"
                     fullWidth
                     autoComplete="family-name"
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     required
                     id="address1"
                     name="address1"
                     label="Address"
                     fullWidth
                     autoComplete="shipping address-line1"
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     id="address2"
                     name="address2"
                     label="C/O"
                     fullWidth
                     autoComplete="shipping address-line2"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="city"
                     name="city"
                     label="Ort"
                     fullWidth
                     autoComplete="shipping address-level2"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField id="state" name="state" label="Region" fullWidth />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="zip"
                     name="zip"
                     label="Postkod"
                     fullWidth
                     autoComplete="shipping postal-code"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="country"
                     name="country"
                     label="Land"
                     fullWidth
                     autoComplete="shipping country"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="phoneNumber"
                     name="phoneNumber"
                     label="Telefon nummer"
                     fullWidth
                     autoComplete="tel"
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     required
                     id="mail"
                     name="mail"
                     label="Mail"
                     fullWidth
                     autoComplete="email"
                  />
               </Grid>
               <Grid item xs={12}>
                  <FormControlLabel
                     control={
                        <Checkbox
                           color="primary"
                           name="saveAddress"
                           value="yes"
                        />
                     }
                     label="Använd den här adressen som leveransadress "
                  />
               </Grid>
            </Grid>
         </React.Fragment>
   );
}

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      form: {
         marginBlockStart: '0.5rem',
      },
   }),
);
