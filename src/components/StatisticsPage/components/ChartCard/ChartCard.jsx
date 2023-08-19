import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStyles } from './ChartCardStyles';

const ChartCard = ({ title, data, dataKeys }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.cardTitle}>{title}</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {dataKeys.map((key, index) => (
                            <Line key={index} type="monotone" dataKey={key.dataKey} stroke={key.stroke} activeDot={{ r: 8 }} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default ChartCard;
