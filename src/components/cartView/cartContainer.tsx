import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  mainstyle:{
    height: '100vh',
  },
});

function createData(name: string, Products: number, Pris: number, Antal: number, protein: number) {
  return { name, Products,  Pris, Antal, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Grid className={classes.mainstyle}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>kanse har proudkt name här??</TableCell>
            <TableCell align="right">Products</TableCell>
            <TableCell align="right">Pris&nbsp;</TableCell>
            <TableCell align="right">Antal&nbsp;</TableCell>
            <TableCell align="right">Delsumma&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Products}</TableCell>
              <TableCell align="right">{row.Pris}</TableCell>
              <TableCell align="right">{row.Antal}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}