import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  botsList: {
    display: "flex",
    overflowX: "auto",
    marginBottom: theme.spacing(3),
  },
  linkButton: {
    marginTop: theme.spacing(2),
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    borderColor: "#333",
    color: "#333",
  },
  title: {
    color: "#444",
    marginBottom: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(3),
    "& label.Mui-focused": {
      color: "#555",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#555",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#555",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#555",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#555",
    },
    "& .MuiInputLabel-root": {
      color: "#aaa",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#555",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ccc",
    },
  },
}));
