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

interface Props {}

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
                                        checked={selectedValue === 'e'}
                                        onChange={handleChange}
                                        value="e"
                                        color="default"
                                        name="radio-button"
                                        inputProps={{ 'aria-label': 'E' }}
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
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem value="1">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                Onsdagen den 1 april, kl 17 - 22
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Torsdagen den 2 april, kl 17 - 22
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Fredagen den 3 april, kl 17 - 22
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
                                        inputProps={{ 'aria-label': 'E' }}
                                        size="small"
                                    />
                                    <span>Ombud express - Postnord</span>
                                    <div className={classes.leftMargin}>
                                        Order lagt innan kl. 22.00 skickas med
                                        bud söndag-torsdag kväll. Preliminär
                                        leverans imorgon.
                                    </div>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem value="2">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={40}>
                                                Onsdagen den 31 mars, kl 17 - 22
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    49 kr
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        color="default"
                                        name="radio-button"
                                        inputProps={{ 'aria-label': 'E' }}
                                        size="small"
                                    />
                                    <span>Earlybird</span>
                                    <div className={classes.leftMargin}>
                                        Levereras innan 07:00 till din brevlåda,
                                        större försändelser lämnas vid dörren
                                        eller brevlådan
                                    </div>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={3}>
                                                Onsdagen den 31 mars, från kl
                                                03.00
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
                                        inputProps={{ 'aria-label': 'E' }}
                                        size="small"
                                    />
                                    <span>DHL express </span>
                                    <div className={classes.leftMargin}>
                                        2 vardagar
                                    </div>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    <FormControl
                                        variant="outlined"
                                        className={classes.formControl}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Leveransdatum
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={DeliveryDate}
                                            onChange={handleChanged}
                                            label="Leveransdatum"
                                        >
                                            <MenuItem value="4">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={70}>
                                                Onsdagen den 30 mars
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell className={classes.paddingLeft}>
                                    48 kr
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Radio
                                        checked={selectedValue === 'c'}
                                        onChange={handleChange}
                                        value="c"
                                        color="default"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'E' }}
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
            minWidth: '19rem',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);
