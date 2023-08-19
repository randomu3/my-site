import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "8px",
    backgroundColor: "#333",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2), // добавьте небольшой отступ снизу для разделения
  },
  title: {
    color: "#fff",
    display: "block"
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    color: "#fff",
  },
  chatBox: {
    height: 'auto',
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
    backgroundColor: "#555",
    color: "#fff",
    marginBottom: theme.spacing(1), // добавляем небольшой отступ снизу для мобильных устройств
    width: "100%", // кнопки будут занимать всю ширину на мобильных устройствах
    [theme.breakpoints.up("sm")]: {
      // медиа-запрос для экранов от 600px и выше
      marginBottom: 0,
      width: "auto", // на больших экранах кнопки будут иметь автоматическую ширину
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // позволяет элементам переноситься на новую строку, если не хватает места
  },
  backButton: {
    width: "100%", // кнопка "Назад" будет занимать всю ширину на мобильных устройствах
    [theme.breakpoints.up("sm")]: {
      // медиа-запрос для экранов от 600px и выше
      width: "auto",
    },
  },
}));
