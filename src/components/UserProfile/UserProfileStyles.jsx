import { makeStyles } from "@material-ui/core";

export const useProfileStyles = makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "100%",
    marginBottom: theme.spacing(3), // Добавлен отступ после формы
  },
  submit: {
    marginTop: theme.spacing(2),
  },
  billingButton: {
    margin: theme.spacing(0, 1),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
}));
