import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FilledInput } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export default function PaymentForm() {
   const classes = useStyles();

   return (
      <form action="" method="get">
         <div className={classes.root}>
            <Typography variant="h4" gutterBottom>
               Betalningsmetod
            </Typography>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography className={classes.heading}>
                     Kortbetalning
                  </Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
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
                  </Typography>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography className={classes.heading}>Swish</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     <Grid container spacing={6}>
                        <Grid
                           className={classes.feildstley}
                           item
                           xs={12}
                           md={6}
                        >
                           <TextField
                              required
                              id="cardName"
                              label="Telefonnummer för Swishbetalning"
                              fullWidth
                              autoComplete="telfone"
                           />
                        </Grid>
                     </Grid>
                  </Typography>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography className={classes.heading}>
                  Faktura
                  </Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     <Grid container spacing={3}>
                        <Grid className={classes.feildstley} item xs={12} md={6}>
                           <TextField
                              required
                              id="Personnummer"
                              label="Personnummer"
                              fullWidth
                              autoComplete="cc-Personnummer"
                           />
                        </Grid>
                     </Grid>
                  </Typography>
               </AccordionDetails>
            </Accordion>

            <React.Fragment>
               {/* <input type="submit" value="Nästa"> */}
               <Button
                  type="submit"
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
      </form>
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
      feildstley: {
         width: '50rem',
      },
      heading: {
         fontSize: theme.typography.pxToRem(15),
         fontWeight: theme.typography.fontWeightRegular,
      },
   }),
);
