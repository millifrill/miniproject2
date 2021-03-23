import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
    },
    papers: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: '60rem',
      height: 'auto',
      width: 'auto',
    },
    image: {
      width: '5rem',
      height: '5rem',
    },
    title:{
      font: '2rem',
      height: '4rem',
    },
  
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 80,
     },
     textstyle:{
      justifyContent: 'space-between',
      display: 'flex',
      textAlign: 'center',
      
    },
     paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: 'auto',
      maxWidth: '60rem',
      
    },
    paperstyle: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: 'auto',
      height:'auto',
     

    },
  }),
);

export default function Cart() {
  const classes = useStyles();

  const [quantity, setQuantity] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
     setQuantity(event.target.value as string);
  };
  return (


    <div className={classes.root}>
         <Grid  className={classes.paper} item xs={12}>
          <Paper className={classes.paper}><div className={classes.textstyle}>Produckt| Pris | Antal |</div> </Paper>
        </Grid>
      <Paper className={classes.papers}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} src="https://live.staticflickr.com/3727/9541317886_bbaf9957ed_b.jpg" alt="Dahlias"></img>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Produt Name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  
                </Typography>
         
              </Grid>
              <Grid item>
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
                     <MenuItem value={10}>0</MenuItem>
                     <MenuItem value={20}>1</MenuItem>
                     <MenuItem value={30}>2</MenuItem>
                     <MenuItem value={30}>3</MenuItem>
                     <MenuItem value={30}>4</MenuItem>
                     <MenuItem value={30}>5</MenuItem>
                     <MenuItem value={30}>6</MenuItem>
                     <MenuItem value={30}>7</MenuItem>
                     <MenuItem value={30}>8</MenuItem>
                     <MenuItem value={30}>9</MenuItem>
                     <MenuItem value={30}>10</MenuItem>
                     <MenuItem value={30}>11</MenuItem>
                  </Select>
               </FormControl>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Button  variant="contained" color="primary">
                 Remove</Button> 
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">35.00 kr</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}