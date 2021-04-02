import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    Typography,
} from '@material-ui/core';
import { Select } from '@material-ui/core';

interface Props {
   
    
}

const ShippingView: React.FC<Props> = () => {
    
    const classes = useStyles();

    const [DeliveryDate, setDeliveryDate] = React.useState('');

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChanged = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDeliveryDate(event.target.value as string);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Fraktalternativ
            </Typography>
            <Grid className={classes.mainstyle}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        color="default"
                                        name="radio-button"
                                        inputProps={{ 'aria-label': 'a' }}
                                        size="small"
                                    />
                                    <span>Brev - Postnord</span>
                                    <div className={classes.leftMargin}>
                                        3 vardagar
                                    </div>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="select-outlined-label"
                                            id="select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem className={classes.menuItemFontSize} value={10}>
                                                Torsdagen den 8 april
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    0 kr
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange}
                                        value="b"
                                        color="default"
                                        name="radio-button"
                                        inputProps={{ 'aria-label': 'b' }}
                                        size="small"
                                    />
                                    <span>Ombud express - Postnord</span>
                                    <div className={classes.leftMargin}>
                                        Order lagt innan kl. 22.00 skickas med
                                        bud söndag-torsdag kväll kl 17 - 22. Preliminär
                                        leverans imorgon.
                                    </div>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="select-outlined-label"
                                            id="select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem className={classes.menuItemFontSize} value={40}>
                                            Tisdagen den 6 april
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    0 kr
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio
                                        checked={selectedValue === 'c'}
                                        onChange={handleChange}
                                        value="c"
                                        color="default"
                                        name="radio-button"
                                        inputProps={{ 'aria-label': 'c' }}
                                        size="small"
                                    />
                                    <span>Earlybird</span>
                                    <div className={classes.leftMargin}>
                                        <div>2 vardagar</div>
                                        <div>Levereras innan 07:00 till din brevlåda,
                                        större försändelser lämnas vid dörren
                                        eller brevlådan</div>
                                    </div>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="select-outlined-label"
                                            id="select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem className={classes.menuItemFontSize} value={3}>
                                            Onsdagen den 7 april
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    0 kr
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio
                                        checked={selectedValue === 'f'}
                                        onChange={handleChange}
                                        value="f"
                                        color="default"
                                        name="radio-button"                                
                                        inputProps={{ 'aria-label': 'f' }}
                                        size="small"
                                    />
                                    <span>Upphämtning i butik</span>
                                </TableCell>
                                <TableCell
                                    className={classes.paddingLeft}
                                ><div className={classes.leftMargin}>
                                Kan hämtas i butiken under öppetider
                            </div></TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    0 kr
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </div>
    );
};

export default ShippingView;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            paddingRight: '30rem',
            alignItems: 'center',
        },
        paddingLeft: {
            paddingLeft: '1rem',
        },
        mainstyle: {
            marginBlockStart: '1rem',
        },
        leftMargin: {
            marginLeft: '2.18rem',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: '15rem',
            fontSize: '0.9rem',

        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        menuItemFontSize: {
            fontSize: '0.9rem',
        }
    }),
);