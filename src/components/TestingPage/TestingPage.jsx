import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { mockBotMessages } from "../../utils/mockStatistics/mockData";
import { mockBots } from "../../utils/mockDashbord/mockData";
import { useStyles } from "./TestingPageStyles";
import { Link } from "react-router-dom";

const TestingPage = () => {
  const classes = useStyles();
  const [selectedBot, setSelectedBot] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(mockBotMessages);

  const handleSendMessage = () => {
    setChatHistory([...chatHistory, { id: Date.now(), message, type: "user" }]);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography variant="h5" className={classes.title}>
          Тестирование бота
        </Typography>
        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          color="primary"
          className={classes.backButton}
        >
          Назад
        </Button>
      </div>

      {!selectedBot ? (
        <div>
          <Typography variant="h6" className={classes.subtitle}>
            Выберите бота для тестирования:
          </Typography>
          {mockBots.map((bot) => (
            <Card key={bot.id} className={classes.card}>
              <CardContent>
                <Typography variant="h6">{bot.name}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setSelectedBot(bot)}>
                  Выбрать
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <div className={classes.chatBox}>
            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.type === "bot" ? classes.botMessage : classes.userMessage
                }
              >
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="Введите ваше сообщение..."
            className={classes.input}
          />
          <div className={classes.buttonContainer}>
            <Button onClick={handleSendMessage} className={classes.button}>
              Отправить
            </Button>
            <Button
              onClick={() => setSelectedBot(null)}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Сменить бота
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TestingPage;
