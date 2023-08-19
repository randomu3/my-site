import React from 'react';
import { Container } from '@material-ui/core';
import { activityData, profitData } from '../../utils/mockStatistics/mockData';
import { useStyles } from './StatisticsPageStyles';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import StatisticsInfo from './components/StatisticsInfo/StatisticsInfo';
import ChartCard from './components/ChartCard/ChartCard';

const StatisticsPage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <HeaderComponent />
            <StatisticsInfo />
            <ChartCard 
                title="Активность по месяцам" 
                data={activityData} 
                dataKeys={[
                    { dataKey: 'messages', stroke: '#8884d8' },
                    { dataKey: 'commands', stroke: '#82ca9d' }
                ]}
            />
            <ChartCard 
                title="Прибыль по месяцам" 
                data={profitData} 
                dataKeys={[
                    { dataKey: 'profit', stroke: '#f48fb1' }
                ]}
            />
        </Container>
    );
};

export default StatisticsPage;
