import React from "react";
import { Container, Typography, Button, TextField } from "@material-ui/core";
import { useStyles } from "./SupportStyles";
import PageWrapper from "../PageWrapper/PageWrapper";

const SupportPage = ({ onBack }) => {
  const classes = useStyles();
  return (
    <PageWrapper title="Техническая поддержка">
      <Container>
        <Typography className={classes.botMessage}>
          Если у вас возникли вопросы или проблемы, свяжитесь с нами через форму
          ниже или просмотрите FAQ.
        </Typography>

        <TextField
          className={classes.input}
          label="Ваше сообщение"
          variant="outlined"
          multiline
          rows={4}
        />

        <Button variant="contained" color="primary" className={classes.button}>
          Отправить
        </Button>

        <Button onClick={onBack} className={classes.backButton}>
          Назад
        </Button>
      </Container>
    </PageWrapper>
  );
};

export default SupportPage;
