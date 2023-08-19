import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './HeaderStyles';

const HeaderComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Typography variant="h5" className={classes.title}>Статистика</Typography>
            <Button component={Link} to="/dashboard" variant="contained" color="default" className={classes.backButton}>
                Назад
            </Button>
        </div>
    );
};

export default HeaderComponent;
