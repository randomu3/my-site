import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { mockBots } from '../../../../utils/mockTesting/mockData';

const botsPerPage = 3; // количество ботов на одной странице

const BotSelector = ({ classes, onSelect }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(mockBots.length / botsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const displayedBots = mockBots.slice((currentPage - 1) * botsPerPage, currentPage * botsPerPage);

    return (
        <div>
            <Typography variant="h6" className={classes.subtitle}>
                Выберите бота для тестирования:
            </Typography>
            {displayedBots.map((bot) => (
                <Card key={bot.id} className={classes.card}>
                    <CardContent>
                        <Typography variant="h6">{bot.name}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => onSelect(bot)}>
                            Выбрать
                        </Button>
                    </CardActions>
                </Card>
            ))}
            <div className={classes.buttonContainer}>
                <Button disabled={currentPage === 1} onClick={handlePrevPage} variant="contained" color="primary">Предыдущая</Button>
                <Typography className={classes.count}>{currentPage} из {totalPages}</Typography>
                <Button disabled={currentPage === totalPages} onClick={handleNextPage} variant="contained" color="primary">Следующая</Button>
            </div>
        </div>
    );
}

export default BotSelector;
