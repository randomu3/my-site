import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ButtonSection = ({ classes }) => (
  <div className={classes.buttonContainer}>
    <Button
      component={Link}
      to="/dashboard/billing"
      variant="outlined"
      color="default"
      className={classes.billingButton}
    >
      Биллинг и платежи
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
);

export default ButtonSection;
