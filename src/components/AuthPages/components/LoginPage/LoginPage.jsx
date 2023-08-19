import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./LoginPageStyles";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Importing Link and renaming it to RouterLink

function LoginPage() {
  const navigate = useNavigate();
  const classes = useStyles();
  const checkUserCredentials = () => {
    // Placeholder logic: always returns true.
    // In a real application, you would validate the user's credentials here.
    return true;
  };
  const sendForm = (e) => {
    e.preventDefault();

    // Проверьте учетные данные пользователя и, если все в порядке, перейдите на дашборд.
    // Например:
    if (checkUserCredentials()) {
      navigate("/dashboard");
    }
  };

  return (
    <Container component={Paper} elevation={3} className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Войти
      </Typography>
      <form className={classes.form} onSubmit={sendForm}>
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
          defaultValue="test@example.com" // моковые данные для email
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
          defaultValue="password123" // моковые данные для пароля
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
