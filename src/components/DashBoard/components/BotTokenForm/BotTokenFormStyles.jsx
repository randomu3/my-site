import { makeStyles } from "@material-ui/core";

export const useTokenFormStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    marginBottom: theme.spacing(2),
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
