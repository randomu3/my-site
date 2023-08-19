import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "8px",
    backgroundColor: "#e0e0e0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  botsList: {
    display: "flex",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
  },
  botButton: {
    margin: theme.spacing(0, 1),
    minWidth: "120px",
  },
  botSettings: {
    marginTop: theme.spacing(2),
  },
  title: {
    color: "#000",
  },
  linkButton: {
    marginTop: theme.spacing(2),
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    borderColor: "#000",
    color: "#000",
  },
  card: {
    marginBottom: theme.spacing(2), // Добавлен отступ снизу
  },
  input: {
    marginBottom: theme.spacing(2), // Добавлен отступ снизу
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#888",
      },
      "&:hover fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#000",
    },
    "& .MuiInputLabel-root": {
      color: "#888",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#888",
    },
  },
}));
