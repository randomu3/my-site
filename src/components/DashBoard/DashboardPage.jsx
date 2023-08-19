import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { mockBots, mockModules } from "../../utils/mockDashbord/mockData";
import { useStyles } from "./DashBoardStyles";
import { Link } from "react-router-dom";
import BotTokenForm from "./components/BotTokenForm";

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
        <div className={classes.botSettings}>
          <Typography variant="h6" className={classes.title}>
            Настройки для {selectedBot.name}:
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Выберите модуль заработка:</FormLabel>
            <RadioGroup
              aria-label="earning module"
              name="earningModule"
              value={earningModule}
              onChange={handleEarningModuleChange}
            >
              <FormControlLabel
                value="boosting"
                control={<Radio />}
                label="Модуль накрутки"
              />
              <FormControlLabel
                value="smsService"
                control={<Radio />}
                label="Модуль SMS сервиса"
              />
              <FormControlLabel
                value="steamReplenishments"
                control={<Radio />}
                label="Модуль Steam пополнений"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
            id="profitPercentage"
            label="% прибыли"
            name="profitPercentage"
            value={profitPercentage}
            onChange={handleProfitPercentageChange}
            className={classes.input}
          />

          {moduleDescription && (
            <>
              <Typography variant="h6" className={classes.title}>
                Описание модуля:
              </Typography>
              <Typography>{moduleDescription}</Typography>
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default DashboardPage;
