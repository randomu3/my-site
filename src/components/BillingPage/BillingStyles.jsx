import { makeStyles } from "@material-ui/core";

export const useBillingStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    borderColor: "#aaa",
    borderRadius: "8px",
  },
  button: {
    marginTop: theme.spacing(2),
    borderColor: "#333",
    color: "#333",
  },
}));

