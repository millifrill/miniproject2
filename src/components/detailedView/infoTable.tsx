import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

function createData(name: string, value: any) {
    return { name, value };
}

const rows = [
    createData('Blomstorlek', '9 cm'),
    createData('Höjd', '100 cm'),
    createData('Färg', 'Rosa'),
    createData('Egenskap', 'Bra för snitt'),
    createData('Förkultivering', 'April'),
    createData('Direktplantering', 'Maj/Juni'),
    createData('Planteringsdjup', '10 cm'),
];

export default function InfoTable() {
    
    const classes = useStyles();

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableContainer: {
            maxWidth: '31.5rem',
            marginBlockStart: '3rem',
            minWidth: '15.5rem',
        },
        table: {
            maxWidth: '30rem',
        },
    }),
);
