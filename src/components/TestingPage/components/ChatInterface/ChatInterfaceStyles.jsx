import { makeStyles } from "@material-ui/core";

export const useChatInterfaceStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#333", // Тёмный фон для всего контейнера
    padding: theme.spacing(2),
    borderRadius: "8px",
  },
  chatBox: {
    height: "auto",
    maxHeight: "365px",
    overflowY: "auto",
    border: "1px solid #555",
    borderRadius: "8px",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  botMessage: {
    textAlign: "left",
    color: "#ddd",
    marginBottom: theme.spacing(1),
  },
  userMessage: {
    textAlign: "right",
    color: "#fff",
    marginBottom: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(2),
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
    flexDirection: "column", // стекаем кнопки вертикально
    alignItems: "center", // центрируем кнопки по горизонтали
    marginTop: theme.spacing(2), // добавляем верхний отступ

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row", // на больших экранах кнопки располагаются горизонтально
      justifyContent: "space-between", // распределяем кнопки по краям
      alignItems: "center",
    },
  },
  button: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    marginBottom: theme.spacing(1),
    width: "100%",
    "&:hover": {
      backgroundColor: "#2e3d90", // Немного темнее при наведении
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
      width: "auto",
    },
  },
  blueButton: {
    backgroundColor: "#5C6BC0",
    color: "#fff",
    width: "100%",
    "&:hover": {
      backgroundColor: "#3F51B5",
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
}));