import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: "8px",
    backgroundColor: "#333",
  },
  [theme.breakpoints.up("sm")]: {
    container: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(4),
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2), // добавьте небольшой отступ снизу для разделения
  },
  title: {
    color: "#fff",
    display: "block",
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    color: "#fff",
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
  button: {
    backgroundColor: "#555", // делаем кнопку серой
    color: "#fff",
    marginBottom: theme.spacing(1), // добавляем небольшой отступ снизу для мобильных устройств
    width: "100%", // кнопки будут занимать всю ширину на мобильных устройствах
    [theme.breakpoints.up("sm")]: {
      // медиа-запрос для экранов от 600px и выше
      marginBottom: 0,
      width: "auto", // на больших экранах кнопки будут иметь автоматическую ширину
    },
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  backButton: {
    width: "100%", // кнопка "Назад" будет занимать всю ширину на мобильных устройствах
    [theme.breakpoints.up("sm")]: {
      // медиа-запрос для экранов от 600px и выше
      width: "auto",
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
  blueButton: {
    backgroundColor: '#3f51b5',
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3", // темный оттенок синего при наведении
    },
    // ... возможно, другие стили, которые вы хотите добавить
  },
}));
