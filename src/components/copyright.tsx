import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link to="/" color="inherit">
                Dahliabanken
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
