import { Button, Container, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./LoginPageStyles";
import { Link as RouterLink } from "react-router-dom"; // Importing Link and renaming it to RouterLink

function LoginPage() {
    const classes = useStyles();

    return (
      <Container component={Paper} elevation={3} className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Войти
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
          <TextField
  className={`${classes.input} ${classes.placeholder}`}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
          <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.linkButton}
              component={RouterLink}
              to="/forgot-password"
          >
              Забыли пароль?
          </Button>
          <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.linkButton}
              component={RouterLink}
              to="/register"
          >
              Регистрация
          </Button>
        </form>
      </Container>
    );
  }


  export default LoginPage;