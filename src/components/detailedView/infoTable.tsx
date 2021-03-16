import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function infoTable() {
    return(
        <div>
            <div>
                <h1>Tilte på produkt</h1>
                <p>lite info</p>
                <p>pris kr</p>
            
                <Button  variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                 Primary
                </Button>

            </div>
        </div>
    )
}