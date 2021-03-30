import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './addressForm';
import PaymentForm from './paymentForm';
import Review from './review';
import CartView from './cartView';
import ShippingView from './shippingView';

const steps = ['Kundvagn', 'Kunduppgifter', 'Betalning', 'Frakt', 'Orderöversikt'];

function getStepContent(step: number) {
   switch (step) {
      case 0:
         return <CartView />;
      case 1:
         return <AddressForm />;
      case 2:
         return <PaymentForm />;
      case 3:
         return <ShippingView />;
      case 4:
         return <Review />;
      default:
         throw new Error('Unknown step');
   }
}

export default function Checkout() {
   const classes = useStyles();
   const [activeStep, setActiveStep] = React.useState(0);

   const handleNext = () => {
      setActiveStep(activeStep + 1);
   };

   const handleBack = () => {
      setActiveStep(activeStep - 1);
   };

   return (
      <React.Fragment>
         <CssBaseline />
         <Container component="main" className={classes.main} maxWidth="md">
            <Paper className={classes.paper} variant="outlined">
               <div className={classes.hide}>
               <Typography component="h1" variant="h4" align="center">
                  Kassa
               </Typography>
               <Stepper activeStep={activeStep} className={classes.stepper}>
                  {steps.map((label) => (
                     <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                     </Step>
                  ))}
               </Stepper>
               </div>
               <React.Fragment>
                  {activeStep === steps.length ? (
                     <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                           Tack för din beställning.
                        </Typography>
                        <Typography variant="subtitle1">
                           Ditt order nummer är #2001539. Vi har skickat din
                           beställning via e-post bekräftelse och skickar en
                           uppdatering när din beställning är färdig
                           förlevereras.
                        </Typography>
                     </React.Fragment>
                  ) : (
                     <React.Fragment>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                           {activeStep !== 0 && (
                              <Button
                                 onClick={handleBack}
                                 className={classes.button}
                              >
                                 Tillbaka
                              </Button>
                           )}
                           <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={handleNext}
                              className={classes.button}
                           >
                              {activeStep === steps.length - 1
                                 ? 'Bekräfta order'
                                 : 'Nästa'}
                           </Button>
                        </div>
                     </React.Fragment>
                  )}
               </React.Fragment>
            </Paper>
         </Container>
      </React.Fragment>
   );
}

const useStyles = makeStyles((theme) => ({
   main: {
      marginBottom: theme.spacing(4),
   },
   paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
         marginTop: theme.spacing(6),
         marginBottom: theme.spacing(6),
         padding: theme.spacing(3),
      },
   },
   hide: {
      display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
            },
   },
   stepper: {
      padding: theme.spacing(3, 0, 5),
   },
   buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
   },
   button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      color: '#202e32',
   },
}));
