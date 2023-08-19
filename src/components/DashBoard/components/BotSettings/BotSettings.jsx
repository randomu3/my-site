// BotSettings.js

import React from "react";
import {
  TextField,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  Card,
  CardContent,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { useStyles } from "./BotSettingsStyles";
import { useNavigate } from "react-router-dom";

const BotSettings = ({
  selectedBot,
  earningModule,
  handleEarningModuleChange,
  profitPercentage,
  handleProfitPercentageChange,
  moduleDescription,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToNewsletterManagement = () => {
    navigate("/dashboard/management/"); // Updated path navigation
  };
  return (
    <div className={classes.botSettings}>
      <Card className={classes.botCard}>
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            Настройки для {selectedBot.name}
          </Typography>

          <Button
            onClick={goToNewsletterManagement}
            className={classes.linkButton}
          >
            Управление рассылками
          </Button>

          <Card className={classes.innerCard}>
            <CardContent>
              <Typography variant="h6" className={classes.subtitle}>
                Модуль заработка
              </Typography>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                  aria-label="earning module"
                  name="earningModule"
                  value={earningModule}
                  onChange={handleEarningModuleChange}
                  className={classes.radioGroup}
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
            </CardContent>
          </Card>

          <Card className={classes.innerCard}>
            <CardContent>
              <Typography variant="h6" className={classes.subtitle}>
                Процент прибыли
              </Typography>
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
            </CardContent>
          </Card>

          {moduleDescription && (
            <Card className={classes.innerCard}>
              <CardContent className={classes.content}>
                <Typography variant="h6" className={classes.subtitle}>
                  Описание модуля
                </Typography>
                <Typography>{moduleDescription}</Typography>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BotSettings;
