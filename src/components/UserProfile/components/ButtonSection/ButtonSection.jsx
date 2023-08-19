import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ButtonSection = ({ classes }) => (
  <div className={classes.buttonContainer}>
    <Button
      component={Link}
      to="/dashboard/billing"
      variant="outlined"
      color="default"
    >
      Биллинг и платежи
    </Button>
    <Button
      component={Link}
      to="/dashboard/security"
      variant="outlined"
      color="default"
    >
      Безопасность
    </Button>
  </div>
);

export default ButtonSection;
