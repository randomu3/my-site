import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import { mockBots, mockModules } from "../../utils/mockDashbord/mockData";
import { useStyles } from "./DashBoardStyles";
import { Link } from "react-router-dom";
import BotTokenForm from "./components/BotTokenForm/BotTokenForm";
import BotSettings from "./components/BotSettings/BotSettings";

const DashboardPage = () => {
  const classes = useStyles();
  const [selectedBot, setSelectedBot] = useState(null);
  const [earningModule, setEarningModule] = useState("");
  const [profitPercentage, setProfitPercentage] = useState(0);

  const handleBotSelect = (bot) => {
    console.log("Bot selected:", bot);
    setSelectedBot(bot);
  };

  const handleEarningModuleChange = (event) => {
    setEarningModule(event.target.value);
  };

  const handleProfitPercentageChange = (event) => {
    setProfitPercentage(event.target.value);
  };

  const moduleDescription = mockModules.find(
    (module) => module.id === earningModule
  )?.description;

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.header}>
        <Typography component="h1" variant="h5" className={classes.title}>
          Личный кабинет
        </Typography>
        <div>
          <Button
            component={Link}
            to="/dashboard/testing"
            variant="outlined"
            color="default"
            style={{ marginRight: "10px" }}
          >
            Тестирование
          </Button>
          <Button
            component={Link}
            to="/dashboard/statistics"
            variant="outlined"
            color="default"
            style={{ marginRight: "10px" }}
          >
            Статистика
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Выход
          </Button>
        </div>
      </div>

      <BotTokenForm />

      <Typography variant="h6" className={classes.title}>
        Ваши боты:
      </Typography>
      <div className={classes.botsList}>
        {mockBots.map((bot) => (
          <Button
            key={bot.id}
            onClick={() => handleBotSelect(bot)}
            className={classes.botButton}
          >
            {bot.name}
          </Button>
        ))}
      </div>

      {selectedBot && (
        <BotSettings
          selectedBot={selectedBot}
          earningModule={earningModule}
          handleEarningModuleChange={handleEarningModuleChange}
          profitPercentage={profitPercentage}
          handleProfitPercentageChange={handleProfitPercentageChange}
          moduleDescription={moduleDescription}
        />
      )}
    </Container>
  );
};

export default DashboardPage;
