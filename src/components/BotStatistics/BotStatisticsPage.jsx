import React from 'react';
import { Container, Typography, Button, Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { mockStatistics, activityData, profitData } from '../../utils/mockStatistics/mockData';
import { useStyles } from './BotStatisticsPageStyles';

const StatisticsPage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h5" className={classes.title}>Статистика</Typography>
                <Button component={Link} to="/" variant="contained" color="default" className={classes.backButton}>
                    Назад
                </Button>
            </div>
            <Typography variant="body1" className={classes.statsText}>Активные пользователи: {mockStatistics.activeUsers}</Typography>
            <Typography variant="body1" className={classes.statsText}>Отправлено сообщений: {mockStatistics.totalMessagesSent}</Typography>
            <Typography variant="body1" className={classes.statsText}>Использовано команд: {mockStatistics.totalCommandsUsed}</Typography>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.cardTitle}>Активность по месяцам</Typography>
                    <LineChart width={600} height={300} data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="messages" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="commands" stroke="#82ca9d" />
                    </LineChart>
                </CardContent>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.cardTitle}>Прибыль по месяцам</Typography>
                    <LineChart width={600} height={300} data={profitData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="profit" stroke="#f48fb1" activeDot={{ r: 8 }} />
                    </LineChart>
                </CardContent>
            </Card>
        </Container>
    );
};

export default StatisticsPage;
