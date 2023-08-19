import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: "#f5f5f5", // светлый фон
    width: '100%',
    maxWidth: '100%',
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  title: {
    color: "#333", // темный цвет текста
  },
  statsText: {
    color: "#555", // немного светлее цвет текста
    marginBottom: theme.spacing(2),
  },
  backButton: {
    backgroundColor: "#e0e0e0", // светлый фон кнопки
    color: "#333", // темный цвет текста кнопки
    "&:hover": {
      backgroundColor: "#d0d0d0", // немного темнее при наведении
    },
  },
  card: {
    marginTop: theme.spacing(4),
    backgroundColor: "#fff", // белый фон для карточки
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // легкая тень для карточки
  },
  cardTitle: {
    color: "#444", // темный цвет заголовка карточки
    marginBottom: theme.spacing(2),
  },
}));

