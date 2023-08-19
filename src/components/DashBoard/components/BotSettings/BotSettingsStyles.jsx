// BotSettingsStyles.js

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  botSettings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    overflowY: "auto", // Добавляем вертикальную прокрутку, если контент превышает высоту экрана
    overflowX: "hidden", // Убираем горизонтальный скролл
    paddingBottom: theme.spacing(4), // добавляем отступ снизу
  },
  content: {
    minHeight: "min-content",
  },
  botCard: {
    width: "100%", // Растягиваем на всю ширину
    maxWidth: "calc(100% - 32px)", // Учитываем отступы, чтобы блок был полностью видимым
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(4),
    borderRadius: "20px",
    marginBottom: theme.spacing(6), // увеличиваем отступ снизу
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2), // Уменьшаем отступ для маленьких экранов
    },
  },
  innerCard: {
    backgroundColor: "#ffffff",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    borderRadius: "15px",
    flex: 1, // Позволяет карте расти и занимать доступное пространство
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2), // Уменьшаем отступ для маленьких экранов
    },
  },
  title: {
    color: "#333",
    marginBottom: theme.spacing(3),
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem", // Уменьшаем размер шрифта для маленьких экранов
    },
  },
  subtitle: {
    color: "#444",
    marginBottom: theme.spacing(2),
    fontWeight: 500,
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column", // Радиокнопки вертикально на маленьких экранах
    },
  },
  linkButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(1, 3),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1), // Уменьшаем padding для маленьких экранов
    },
  },
  input: {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));
