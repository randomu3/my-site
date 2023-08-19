import React from 'react';
import { Typography } from '@material-ui/core';
import { useStatisticsStyles } from './StatisticsInfoStyles';
import { mockStatistics } from '../../../../utils/mockStatistics/mockData';

const StatisticsInfo = () => {
    const classes = useStatisticsStyles();
    return (
        <>
            <Typography variant="h6" className={classes.statsText}>
                👥 Активные пользователи: {mockStatistics.activeUsers}
            </Typography>
            <Typography variant="h6" className={classes.statsText}>
                💌 Отправлено сообщений: {mockStatistics.totalMessagesSent}
            </Typography>
            <Typography variant="h6" className={classes.statsText}>
                🛠 Использовано команд: {mockStatistics.totalCommandsUsed}
            </Typography>
        </>
    );
};
    
export default StatisticsInfo;