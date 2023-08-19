import { Button, Container, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./ForgotPasswordPageStyles";
import { Link as RouterLink } from "react-router-dom"; // Importing Link and renaming it to RouterLink

function ForgotPasswordPage() {
    const classes = useStyles();  

    return (
      <Container component={Paper} elevation={3} className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Забыли пароль?
        </Typography>
        <form className={classes.form}>
          <TextField
  className={`${classes.input} ${classes.placeholder}`}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Восстановить пароль
          </Button>
          <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.linkButton}
              component={RouterLink}
              to="/login"
          >
              Войти
          </Button>
        </form>
      </Container>
    );
  }

  export default ForgotPasswordPage;