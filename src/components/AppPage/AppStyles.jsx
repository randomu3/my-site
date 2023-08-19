import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#222",
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "8px",
    backgroundColor: "#333",
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    color: "#fff",
  },
  sectionText: {
    color: "#ddd",
  },
  divider: {
    backgroundColor: "#444",
    margin: theme.spacing(2, 0),
  },
  iconButton: {
    color: "#fff",
    marginRight: theme.spacing(1),
  },

  mobileContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  mobileSection: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  mobileDivider: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1, 0),
    },
  },
}));
