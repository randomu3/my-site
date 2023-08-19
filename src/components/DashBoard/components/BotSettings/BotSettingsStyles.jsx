// BotSettingsStyles.js

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  botSettings: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  botCard: {
    width: '100%',
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(3),
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  innerCard: {
    backgroundColor: "#ffffff",
    marginBottom: theme.spacing(3),
    borderRadius: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#444",
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    color: "#555",
    marginBottom: theme.spacing(1),
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
