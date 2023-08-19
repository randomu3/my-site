import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Paper,
  Divider,
  IconButton,
  Switch,
  Hidden,
  Grid,
} from "@material-ui/core";
import {
  Star,
  HelpOutline,
  MailOutline,
  QuestionAnswer,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStyles } from "./AppStyles";

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#333" : "#222";
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Конструктор телеграмм ботов
          </Typography>
          <Hidden xsDown>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Hidden>
          <Link to="/login">
            <Button variant="contained" color="primary">
              Войти
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container component={Paper} elevation={3} className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.sectionTitle}
            >
              Добро пожаловать в Конструктор телеграмм ботов!
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className={classes.sectionText}
            >
              Описание вашего сервиса, его преимущества и особенности.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className={classes.sectionTitle}>
              <IconButton className={classes.iconButton}>
                <Star />
              </IconButton>
              Особенности
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className={classes.sectionText}
            >
              - Простой и интуитивно понятный интерфейс.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className={classes.sectionText}
            >
              - Множество готовых шаблонов для различных типов ботов.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className={classes.sectionText}
            >
              - Интеграция с популярными сервисами и API.
            </Typography>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <div className={classes.section}>
          <Typography variant="h5" className={classes.sectionTitle}>
            <IconButton className={classes.iconButton}>
              <HelpOutline />
            </IconButton>
            Как это работает
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            1. Выберите шаблон или начните создание бота с нуля.
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            2. Настройте ответы бота, интеграции и другие параметры.
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            3. Запустите бота и начните взаимодействовать с вашими
            пользователями!
          </Typography>
        </div>

        <Divider className={classes.divider} />

        <div className={classes.section}>
          <Typography variant="h5" className={classes.sectionTitle}>
            <IconButton className={classes.iconButton}>
              <MailOutline />
            </IconButton>
            Контакты
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            Если у вас есть вопросы или предложения, свяжитесь с нами по адресу:
            example@email.com
          </Typography>
        </div>

        <Divider className={classes.divider} />

        <div className={classes.section}>
          <Typography variant="h5" className={classes.sectionTitle}>
            <IconButton className={classes.iconButton}>
              <QuestionAnswer />
            </IconButton>
            Часто задаваемые вопросы
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            Q: Как начать создавать бота?
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            A: Просто выберите один из наших шаблонов или начните с нуля в
            разделе "Создать бота".
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            Q: Могу ли я интегрировать своего бота с другими сервисами?
          </Typography>
          <Typography variant="body1" paragraph className={classes.sectionText}>
            A: Да, мы предоставляем интеграцию с множеством популярных сервисов.
            Подробнее в разделе "Интеграции".
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default App;
