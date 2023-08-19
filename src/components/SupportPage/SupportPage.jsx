import React from "react";
import { Container, Typography, Button, TextField } from "@material-ui/core";
import { useStyles } from "./SupportStyles";

const SupportPage = ({ onBack }) => {
  const classes = useStyles();
  return (
    <Container className={classes.supportContainer}>
      <Typography variant="h6" className={classes.heading}>
        Техническая поддержка
      </Typography>

      <Typography className={classes.botMessage}>
        Если у вас возникли вопросы или проблемы, свяжитесь с нами через форму
        ниже или просмотрите FAQ.
      </Typography>

      <TextField
        className={classes.supportInput}
        label="Ваше сообщение"
        variant="outlined"
        multiline
        rows={4}
      />

      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" className={classes.supportButton}>
          Отправить
        </Button>

        <Button variant="contained" color="primary" onClick={onBack} className={classes.backButton}>
          Назад
        </Button>
      </div>
    </Container>
  );
};

export default SupportPage;
