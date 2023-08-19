import React from 'react';
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHeaderStyles } from './HeaderStyles';

const Header = ({ title }) => {
    const classes = useHeaderStyles();

    return (
        <div className={classes.header}>
            <Typography component="h1" variant="h5" className={classes.title}>
                {title}
            </Typography>
            <div className={classes.buttonsContainer}>
                <Button className={classes.button} component={Link} to="/dashboard/" variant="outlined" color="default">Мои боты</Button>
                <Button className={classes.button} component={Link} to="/dashboard/testing" variant="outlined" color="default">Тестирование</Button>
                <Button className={classes.button} component={Link} to="/dashboard/statistics" variant="outlined" color="default">Статистика</Button>
                <Button className={classes.button} component={Link} to="/dashboard/user-activity" variant="outlined" color="default">История активности</Button>
                <Button className={classes.button} component={Link} to="/dashboard/profile" variant="outlined" color="default">Профиль</Button>
                <Button className={classes.button} component={Link} to="/login" variant="contained" color="secondary">Выход</Button>
            </div>
        </div>
    );
};

export default Header;
