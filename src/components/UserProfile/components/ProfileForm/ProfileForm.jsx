import { Button, TextField } from "@material-ui/core";
import { mockUser } from "../../../../utils/mockUser/mockData";

const ProfileForm = ({ classes }) => (
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
);

export default ProfileForm;
