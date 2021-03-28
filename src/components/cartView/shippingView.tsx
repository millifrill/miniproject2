import * as React from 'react';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button,  Grid, Radio } from '@material-ui/core';

interface Props {
};

 const ShippingView: React.FC<Props> = () => {

  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div className={classes.h1Styles}><h1>Fraktsätt</h1>
    
    <Grid className={classes.mainstyle}>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
            <TableRow>
              <TableCell>
                <Radio
                  checked={selectedValue === "e"}
                  onChange={handleChange}
                  value="e"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
                <span>Brev - Postnord</span>
                <div className={classes.leftMargin}>Hemleverans</div>
              </TableCell>
              <TableCell className={classes.paddingLeft}>0 kr</TableCell> 
            </TableRow>
            <TableRow>
              <TableCell>
                <Radio
                  checked={selectedValue === "f"}
                  onChange={handleChange}
                  value="f"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
                <span>Ombud express - Postnord</span>
                <div className={classes.leftMargin}>Order lagt innan kl. 22.00 skickas söndag-torsdag kväll. Preliminär leverans imorgon.</div>
              </TableCell>
              <TableCell className={classes.paddingLeft}>49 kr</TableCell> 
            </TableRow>
            <TableRow>
              <TableCell>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
                <span>Earlybird</span>
                <div className={classes.leftMargin}>Hemleverans</div>
              </TableCell>
              <TableCell className={classes.paddingLeft}>0 kr</TableCell> 
            </TableRow>
            <TableRow>
              <TableCell>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
                <span>Dhl express </span>
                <div className={classes.leftMargin}>Hemleverans</div>
              </TableCell>
              <TableCell className={classes.paddingLeft}>48 kr</TableCell> 
            </TableRow>
            <TableRow>
              <TableCell>
                <Radio
                  checked={selectedValue === "c"}
                  onChange={handleChange}
                  value="c"
                  color="default"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "E" }}
                  size="small"
                />
                <span>Upphämtning i butik</span>
                <div className={classes.leftMargin}>Kan hämtas i butiken under öppetider</div>
              </TableCell>
              <TableCell className={classes.paddingLeft}>0 kr</TableCell> 
            </TableRow>
        </TableBody>
      </Table>

    </TableContainer>
    <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="large"
               >
                  Nästa
               </Button>
    </Grid></div>
  );
}

export default ShippingView;

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  table: {
    paddingRight: '30rem',
    alignItems: 'center',
  },
  paddingLeft: {
   paddingLeft: '5rem'
  },
  h1Styles: {
   marginTop: '4rem',
   margin: 'auto',
  },
  mainstyle: {
   maxWidth: '50rem',
   marginTop: '2rem',
   margin: 'auto',
   height:'100vh',
  },
  leftMargin: {
    marginLeft: '2.18rem',
  },
  button: {
    height: '3rem',
    marginTop: '1rem',
 },
}),
);
