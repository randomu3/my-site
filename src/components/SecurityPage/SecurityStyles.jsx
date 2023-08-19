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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));
