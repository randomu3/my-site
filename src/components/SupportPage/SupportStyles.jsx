import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    supportContainer: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
      borderRadius: "8px",
      backgroundColor: "#333",
      color: "#fff",
    },
    supportButton: {
      margin: theme.spacing(2, 0),
    },
    supportInput: {
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
  }));
  