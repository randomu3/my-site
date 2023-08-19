import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  supportContainer: {
    padding: theme.spacing(4),
    borderRadius: "8px",
    backgroundColor: "#333",
    color: "#fff",
  },

  heading: {
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
  },

  botMessage: {
    marginBottom: theme.spacing(3),
  },

  supportInput: {
    width: "100%",
    marginTop: theme.spacing(2),
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ddd",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    "& .MuiOutlinedInput-input": {
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#ddd",
    },
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },

  supportButton: {
    backgroundColor: "#555",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#777",
    },
  },

  backButton: {
    borderColor: "#555",
    color: "#fff",
    "&:hover": {
      borderColor: "#777",
      color: "#ddd",
    },
  },
}));
