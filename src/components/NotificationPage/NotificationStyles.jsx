// Styles
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
  },
  headerTitle: {
    marginBottom: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderColor: "#aaa",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiSwitch-colorSecondary.Mui-checked": {
      color: "#555",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#555",
    },
  },
}));

