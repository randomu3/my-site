import React from "react";
import { TextField, Button, Avatar } from "@material-ui/core";
import { useProfileStyles } from "./UserProfileStyles";
import { mockUser } from "../../utils/mockUser/mockData";
import { Link } from "react-router-dom";
import PageWrapper from '../PageWrapper/PageWrapper';

const UserProfile = () => {
  const classes = useProfileStyles();

  return (
    <PageWrapper title="Профиль">
      <div className={classes.profileContainer}>
        <Avatar className={classes.avatar}>II</Avatar>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            autoComplete="name"
            defaultValue={mockUser.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            defaultValue={mockUser.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Пароль"
            name="password"
            type="password"
            defaultValue={mockUser.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Сохранить изменения
          </Button>
        </form>
        <div className={classes.buttonContainer}>
          <Button
            component={Link}
            to="/dashboard"
            variant="outlined"
            color="default"
            className={classes.backButton}
          >
            Назад в личный кабинет
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="secondary"
            className={classes.logoutButton}
          >
            Выход из профиля
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserProfile;
