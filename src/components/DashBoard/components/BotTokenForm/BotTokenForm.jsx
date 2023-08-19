import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useTokenFormStyles } from "./BotTokenFormStyles";

const BotTokenForm = () => {
  const classes = useTokenFormStyles();

  return (
    <form className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="token"
        label="Токен бота"
        name="token"
        autoComplete="token"
        autoFocus
        className={classes.input}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Сохранить
      </Button>
    </form>
  );
};

export default BotTokenForm;
