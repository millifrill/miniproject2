import { Route, Switch } from 'react-router-dom';
import Copyright from './copyright';
import Header from './header';
import StartPageView from './masterView/startPageView';
import DetailedView from './detailedView/detailedView';
import CheckoutView from './cartView/checkoutView';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface Props {}

const Layout: React.FC<Props> = () => {
   const classes = useStyles();
      return (
         <div className={classes.container}>
            <Header />
            <Switch>
               <Route exact path="/" component={StartPageView} />
               <Route path="/produkt/:id" component={DetailedView} />
               <Route path="/checkout" component={CheckoutView} />
               <p className={classes.p}>404 sidan finns inte...</p>
            </Switch>
            <Copyright />
         </div>
      );
}

export default Layout;

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      container: {
         display: 'flex',
         flexDirection: 'column',
         flexGrow: 1,
         backgroundColor: '#f6f5f4',
      },
      p: {
         fontSize: '2rem',
         margin: 'auto',
      },
   }),
);
