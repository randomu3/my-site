import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './StatisticsInfoStyles';
import { mockStatistics } from '../../../../utils/mockStatistics/mockData';

const StatisticsInfo = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="body1" className={classes.statsText}>Активные пользователи: {mockStatistics.activeUsers}</Typography>
            <Typography variant="body1" className={classes.statsText}>Отправлено сообщений: {mockStatistics.totalMessagesSent}</Typography>
            <Typography variant="body1" className={classes.statsText}>Использовано команд: {mockStatistics.totalCommandsUsed}</Typography>
        </>
    );
};
    
export default StatisticsInfo;