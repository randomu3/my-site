import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    borderRadius: "8px",
    backgroundColor: "#333",
    width: '100%', // Убедимся, что контейнер занимает всю доступную ширину
    maxWidth: '100%', 
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  title: {
    color: "#fff",
  },
  statsText: {
    color: "#ddd",
    marginBottom: theme.spacing(2),
  },
  backButton: {
    backgroundColor: "#555",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#777",
    },
  },
  card: {
    marginTop: theme.spacing(4),
    backgroundColor: "#444",
    overflow: "hidden", // Это предотвратит выход содержимого за пределы карточки
  },
  cardTitle: {
    color: "#fff",
    marginBottom: theme.spacing(2),
  },cardContent: {
    padding: theme.spacing(2), // Установите отступы в соответствии с вашими потребностями
    overflow: 'hidden', // Это предотвратит выход содержимого за пределы карточки
  },
}));
