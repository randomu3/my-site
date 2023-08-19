import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
  },
  title: {
    color: "#444",
    marginBottom: theme.spacing(2),
    fontWeight: 500,  // Чуть больше жирности, чтобы соответствовать заголовку
  },
  createNewsletterButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),  // добавим для соответствия другим элементам
    padding: theme.spacing(1, 2),  // Добавим отступы
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#303f9f",
    },
  },
  backButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#e0e0e0",
    color: "#333",
    padding: theme.spacing(1, 2),  // Добавим отступы
    "&:hover": {
      backgroundColor: "#d0d0d0",
    },
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderColor: "#aaa",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiSwitch-colorSecondary.Mui-checked": {
      color: "#555",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#555",
    },
  },
}));
